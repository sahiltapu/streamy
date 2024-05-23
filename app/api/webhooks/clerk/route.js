import { Webhook } from 'svix';
import { headers } from 'next/headers';
import ConnectToMongoDB from '@/db/connectToDB';
import User from '@/models/user.model';

export async function POST(req) {
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

    if (!WEBHOOK_SECRET) {
        throw new Error('Please add CLERK_WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
    }

    const headerPayload = headers();
    const svix_id = headerPayload.get('svix-id');
    const svix_timestamp = headerPayload.get('svix-timestamp');
    const svix_signature = headerPayload.get('svix-signature');

    if (!svix_id || !svix_timestamp || !svix_signature) {
        return new Response('Error occurred -- no svix headers', {
            status: 400
        });
    }

    const payload = await req.json();
    const body = JSON.stringify(payload);
    const wh = new Webhook(WEBHOOK_SECRET);

    let evt;
    try {
        evt = wh.verify(body, {
            'svix-id': svix_id,
            'svix-timestamp': svix_timestamp,
            'svix-signature': svix_signature,
        });
    } catch (err) {
        console.error('Error verifying webhook:', err);
        return new Response('Error occurred', {
            status: 400
        });
    }

    const eventType = evt.type;

    if (eventType === 'user.created') {
        const { id, username, image_url: imageUrl, bio, email_addresses } = payload.data;
        const email = email_addresses[0]?.email_address;

        if (!email) {
            console.error('Error: No email address found in the payload.');
            return new Response('Error occurred -- no email address found', {
                status: 400
            });
        }

        try {
            await ConnectToMongoDB();

            // Check if a user with the same username already exists
            const existingUser = await User.findOne({ username });
            if (existingUser) {
                console.error('Error: Username already exists.');
                return new Response('Error occurred -- username already exists', {
                    status: 400
                });
            }

            await User.create({
                username,
                email,
                imageUrl,
                externalUserId: id,
                bio: bio || 'Hey there, I am a new user of OG Streamy'
            });

            console.log("User created successfully");
        } catch (err) {
            console.error('Error creating user in MongoDB:', err);
            return new Response('Error occurred while creating user', {
                status: 500
            });
        }
    }

    return new Response('', { status: 200 });
}
