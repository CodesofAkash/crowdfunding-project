"use server"

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import connectDB from "@/db/connectDb"
import User from "@/models/User"
import Project from "@/models/Projects"

export const initiate = async (to_user, to_project, paymentform, email) => {
    await connectDB();
    var instance = new Razorpay({ key_id: process.env.NEXT_PUBLIC_KEY_ID, key_secret: process.env.KEY_SECRET })

    let options = {
        amount: Number.parseInt(paymentform.amount) * 100,
        currency: "INR",
    }

    let x = await instance.orders.create(options);

    await Payment.create({
        oID: x.id,
        amount: paymentform.amount,
        to_user: to_user,
        to_project: to_project,
        name: paymentform.name,
        message: paymentform.message,
        email: email,
    })

    return x;
}

export const getData = async (to_project) => {
    await connectDB();
    let entries = await Payment.find({ done: true, to_project: to_project });

    const simplifiedEntries = entries.map(entry => ({
        _id: entry._id.toString(),
        name: entry.name,
        message: entry.message,
        amount: entry.amount,
        to_user: entry.to_user,
        to_project: entry.to_project,
        oID: entry.oID,
        done: entry.done,
        givenAt: entry.givenAt,
        __v: entry.__v
    }));

    return simplifiedEntries;
}

export const fetchuser = async (username) => {
    await connectDB();
    let u = await User.findOne({ username: username });
    if (!u) {
        return null;
    }
    let user = u.toObject({ flattenObjectIds: true });
    return user;
}

export const updateProfile = async (data, oldusername) => {
    await connectDB();
    let ndata = Object.fromEntries(data);

    if (oldusername !== ndata.username) {
        let u = await User.findOne({ username: ndata.username });
        if (u) {
            return { error: "Username already exists" }
        }
    }

    await User.updateOne({ email: ndata.email }, ndata);
}

export const updateUser = async (email, data) => {
    try {
        await connectDB();
        const updateObject = {
            name: data.name,
            username: data.username,
            razorpayId: data.razorpayId,
            razorpaySecret: data.razorpaySecret
        };

        let updatedUser = await User.findOneAndUpdate(
            { email: email },
            updateObject,
            { new: true }
        );
        if (updatedUser) {
            return { message: "Updated Successfully" };
        } else {
            return { error: "User not found" };
        }
    } catch (error) {
        console.error("Error updating user:", error);
        return { error: "Failed to update user" };
    }
}


export const newProject = async (data, email) => {
    await connectDB();
    const newProject = await Project.create({
        projectName: data.projectName,
        creatorName: data.creatorName,
        description: data.description,
        profilePic: data.profilePic,
        coverPic: data.coverPic,
        email: email,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
    })
    if(newProject) {
        return ({"message" : "Project created successfuly"})
    } else {
        return ({"error" : "Project was not created"})
    }
}

export const fetchProjects = async () => {
    await connectDB();
    const p = await Project.find({});
    console.log(p)
    const simplifiedEntries = p.map(entry => ({
        _id: entry._id.toString(),
        projectName: entry.projectName,
        creatorName: entry.creatorName,
        description: entry.description,
        profilePic: entry.profilePic,
        coverPic: entry.coverPic,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
        email: entry.email,
        __v: entry.__v
    }));

    return simplifiedEntries;    
}


export const fetchProject = async (email) => {
    await connectDB();
    const p = await Project.find({email: email});
    console.log(p)
    const simplifiedEntries = p.map(entry => ({
        _id: entry._id.toString(),
        projectName: entry.projectName,
        creatorName: entry.creatorName,
        description: entry.description,
        profilePic: entry.profilePic,
        coverPic: entry.coverPic,
        createdAt: entry.createdAt,
        updatedAt: entry.updatedAt,
        email: entry.email,
        __v: entry.__v
    }));

    return simplifiedEntries;    
}