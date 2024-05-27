import ConnectToMongoDB from '@/db/connectToDB';
import User from '@/models/user.model';

export const getRecommendations = async () => {
    await ConnectToMongoDB();
    const users = await User.find().sort({ createdAt: -1 });
    const plainUsers = users.map(user => ({
        _id: user._id.toString(),
        username: user.username,
        imageUrl: user.imageUrl,
        externalUserId: user.externalUserId,
        bio: user.bio,
        createdAt: user.createdAt.toISOString(),
        updatedAt: user.updatedAt.toISOString(),
    }));

    return plainUsers;
};
