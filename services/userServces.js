import ConnectToMongoDB from "@/db/connectToDB";
import User from "@/models/user.model";

export const getUserByUsername = async (username) => {
    try {
        await ConnectToMongoDB();
        const user = await User.findOne({ username });
        return user;
    } catch (error) {
        console.error("Error finding user by username:", error);
        return null;
    }
};
