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

const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;
