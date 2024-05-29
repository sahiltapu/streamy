import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please provide a username'],
        unique: true,
    },
    email: {
        type: String,
        required: [true, 'Please provide an email address'],
        unique: true,
    },
    imageUrl: {
        type: String,
        required: [true, 'Please provide an image URL'],
    },
    externalUserId: {
        type: String,
        required: [true, 'Please provide an external user ID'],
        unique: true,
    },
    bio: {
        type: String,
        required: false,
    },
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true,
    },
});

UserSchema.virtual('following', {
    ref: 'Follow',
    localField: '_id',
    foreignField: 'followerId',
    justOne: false
});
UserSchema.virtual('followedBy', {
    ref: 'Follow',
    localField: '_id',
    foreignField: 'followedById',
    justOne: false
});
UserSchema.set('toObject', { virtuals: true });
UserSchema.set('toJSON', { virtuals: true });

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
