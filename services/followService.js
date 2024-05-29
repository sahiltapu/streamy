import ConnectToMongoDB from "@/db/connectToDB";
import User from "@/models/user.model";
import { getSelf } from "./authService";
import Follow from "@/models/follow.model";
import { toast } from 'sonner'

export const isFollowingUser = async (_id) => {
    try {
        await ConnectToMongoDB();

        const self = await getSelf();
        if (!self) {
            throw new Error("User not logged-in !!")
        }
        // console.log(self + "current user")

        const otherUser = await User.findById({ _id });
        if (!otherUser) {
            throw new Error("other User not found !!");
        }
        // console.log(otherUser + "other user")

        if (otherUser._id.equals(self._id)) {
            return true;
        }

        const existingFollow = await Follow.findOne({
            followerId: self._id,
            followingId: otherUser._id,
        });
        // console.log("isFollowingUser function executed")
        return !!existingFollow;

    } catch (error) {
        console.error(error);
        return false;
    }
};

export const followUsers = async (_id) => {
    try {
        const self = await getSelf();
        const otherUser = await User.findOne({ _id: _id });

        if (!otherUser) {
            throw new Error("User not found");
        }

        if (otherUser._id.equals(self._id)) {
            throw new Error("Cannot follow yourself");
        }

        const existingFollow = await Follow.findOne({
            followerId: self._id,
            followingId: otherUser._id,
        });

        if (existingFollow) {
            throw new Error("Already following");
        }


        const follow = await Follow.create({
            followerId: self._id,
            followingId: otherUser._id
        });


        const populatedFollow = await Follow.findOne({ _id: follow._id })
            .populate('following')
            .populate('followedBy')
            .exec();

        const plainFollow = populatedFollow.toObject();

        console.log("followUser function executed")
        return plainFollow;
    } catch (error) {
        throw new Error("Error following user: " + error.message);
    }
};
