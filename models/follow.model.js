import mongoose from 'mongoose';

const { Schema } = mongoose;

const FollowSchema = new Schema({
    followerId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a followerId'],
    },
    followingId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: [true, 'Please provide a followingId'],
    },
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true,
    },
});

// Indexes
FollowSchema.index({ followerId: 1 });
FollowSchema.index({ followerId: 1, followingId: 1 }, { unique: true });

// Virtuals
FollowSchema.virtual('following', {
    ref: 'User',
    localField: 'followerId',
    foreignField: '_id',
    justOne: true
});
FollowSchema.virtual('followedBy', {
    ref: 'User',
    localField: 'followingId',
    foreignField: '_id',
    justOne: true
});

// Ensure virtuals are included in toObject and toJSON outputs
FollowSchema.set('toObject', { virtuals: true });
FollowSchema.set('toJSON', { virtuals: true });

// Model creation
const Follow = mongoose.models['Follow'] || mongoose.model('Follow', FollowSchema);

export default Follow;
