import { currentUser } from '@clerk/nextjs/server';

import ConnectToMongoDB from '@/db/connectToDB';
import User from '@/models/user.model';

export const getSelf = async () => {
    const self = await currentUser();
    if (!self || !self.username) {
        throw newError("Unauthorized!");
    }

    await ConnectToMongoDB();
    const user = await User.findOne({ externalUserId: self.id })
    if (!user) {
        throw new Error("Not found")
    }
    return user;
}