import mongoose, { Schema } from "mongoose";
import Email from "next-auth/providers/email";
const {Scheme, model} = mongoose;

const ProjectSchema = new Schema({
    projectName: {type: String, required: true},
    creatorName: {type: String, required: true},
    description: {type: String, required: true},
    profilePic: {type: String, required: true},
    email: {type: String, required: true},
    coverPic: {type: String},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
})

const Project = mongoose.models.Project || model("Project", ProjectSchema);
export default Project;