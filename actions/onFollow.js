"use server"
import { followUsers } from "@/services/followService";
import { revalidatePath } from "next/cache";
import { isFollowingUser } from "@/services/followService";

export const onFollow = async (id) => {
    try {
        const alreadyFollowing = await isFollowingUser(id);
        console.log(alreadyFollowing)
        if (alreadyFollowing) {
            throw new Error("Already following this user");
        }

        const followedUser = await followUsers(id);
        revalidatePath("/");

        if (followedUser) {
            revalidatePath(`/${followedUser.following.username}`)
        }
        return followedUser;

    } catch (error) {
        throw new Error("Internal server Error: " + error.message);
    }
};