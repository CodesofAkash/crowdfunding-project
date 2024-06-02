"use client"
import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { useSession } from 'next-auth/react'
import { fetchuser, updateProfile, updateUser } from '@/actions/useractions'
import Link from 'next/link'

const Dashboard = () => {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { data: session, update } = useSession();
    const [info, setinfo] = useState({ name: "", email: "", username: "", profilePic: "", coverPic: "", razorpayId: "", razorpaySecret: "" });

    useEffect(() => {
        if (session) fetchData();
    }, [session, fetchData]);
    

    const fetchData = async () => {
        try {
            const user = await fetchuser(session.user.name);
            setinfo(user);
            console.log(info);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const onSubmit = async (data) => {
        let m = await updateUser(session && session.user.email, data);
        console.log(`message is ${JSON.stringify(m)}`)
        let a = await fetchuser(session.user.name);
        console.log(a);
    }

    return (
        <div className='flex justify-start items-center flex-col mb-32'>
            <h3 className='text-xl font-bold text-center my-10 tracking-tight text-gray-900 md:text-2xl dark:text-white'>Welcome to your Dashboard</h3>
            <div className='w-1/2 rounded-lg bg-gray-800'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full p-10 gap-5 flex justify-start items-center flex-col">
                    <div className="mb-5 w-full">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input
                            {...register("name", { required: true })}
                            value={info.name}
                            onChange={(e) => setinfo({ ...info, name: e.target.value })}
                            type="text"
                            id="name"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="full name"
                            required
                        />
                    </div>
                    <div className="mb-5 w-full">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <input
                            {...register("email", { required: true })}
                            value={info.email}
                            onChange={(e) => setinfo({ ...info, email: e.target.value })}
                            type="email"
                            id="email"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="name@flowbite.com"
                            required
                        />
                    </div>
                    <div className="mb-5 w-full">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                        <input
                            {...register("username", { required: true })}
                            value={info.username}
                            onChange={(e) => setinfo({ ...info, username: e.target.value })}
                            type="text"
                            id="username"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="username"
                            required
                        />
                    </div>
                    <div className="mb-5 w-full">
                        <label htmlFor="razorpayId" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RazorPay ID</label>
                        <input
                            {...register("razorpayId", { required: true })}
                            value={info.razorpayId}
                            onChange={(e) => setinfo({ ...info, razorpayId: e.target.value })}
                            type="text"
                            id="razorpay-ID"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="RazorPay ID"
                            required
                        />
                    </div>
                    <div className="mb-5 w-full">
                        <label htmlFor="razorpaySecret" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">RazorPay Secret</label>
                        <input
                            {...register("razorpaySecret", { required: true })}
                            value={info.razorpaySecret}
                            onChange={(e) => setinfo({ ...info, razorpaySecret: e.target.value })}
                            type="text"
                            id="razorpay-Secret"
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                            placeholder="RazorPay Secret"
                            required
                        />
                    </div>
                    <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-center p-3 px-52 mt-4 text-xl'>Save</button>
                </form>
            </div>
            <Link href={"/new_project"}>
                <button className="relative inline-flex items-center justify-center p-0.5 mt-28 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Create new Project
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default Dashboard;
