import mongoose, { Schema } from "mongoose";
const {model} = mongoose;

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String, required: true},
    username: {type: String, required: true},
    provider: {type: String, required: true},
    razorID: {type: String},
    razorSecret: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const User = mongoose.models.User || model("User", UserSchema);
export default User;