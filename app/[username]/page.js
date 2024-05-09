"use client"
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const MyAccount = ({ params }) => {

    const { data: session } = useSession();
    const [show, setshow] = useState(false)
    const router = useRouter();

    const handleShow = () => {
        setshow(!show);
    }

    if (!session) {
        router.push("/Get-me-a-Chai/app/login");
    }

    return (
        <>
            {session &&
                <div className='flex flex-col justify-start items-start'>
                    <div className="cover size-fit"><Image className='size-fit' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/2854321/0713ec8c651540289edc2f90a40df6ae/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/35.gif?token-time=1717459200&amp;token-hash=nKcV76S8X2qvdY54iQDDYeuNKkUivifYpkGLkuYsVlg%3D" alt="" /></div>
                    <div className='h-fit w-full flex flex-col justify-start items-center gap-10'>
                        <div className='w-full h-fit'><div className='relative w-full h-24 flex justify-center items-center'><Image className='size-32 z-20 rounded-lg absolute top-[-30px]' src={session.user.image} display="block" alt="" /></div></div>
                        <div className='h-fit w-full flex justify-start items-center flex-col gap-1'>
                            <h3 className='text-3xl font-bold'>{session.user.name}</h3>
                            <p>{session.user.email}</p>
                            <div className='flex gap-4 text-gray-300 text-sm'>
                                <span><p>97 projects</p></span>
                                <span><p>944 patronage contributions</p></span>
                            </div>
                            <button className='bg-white px-8 py-3 font-bold my-4 rounded-lg text-sm text-black'>Become a member</button>
                            <div className='size-fit flex justify-center items-center gap-5'>
                                <div className='size-fit'><svg className='w-6' fill='white' data-tag="IconBrandInstagram" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 3.803c2.67 0 2.987.01 4.042.058 2.71.123 3.975 1.409 4.099 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.057 4.042-.124 2.687-1.387 3.975-4.1 4.099-1.054.048-1.37.058-4.041.058-2.67 0-2.987-.01-4.04-.058-2.718-.124-3.977-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.047 1.37-.057 4.04-.057M12 2c-2.716 0-3.056.012-4.122.06-3.632.167-5.65 2.182-5.817 5.817C2.01 8.944 2 9.284 2 12s.012 3.057.06 4.123c.167 3.632 2.182 5.65 5.817 5.817 1.067.048 1.407.06 4.123.06s3.057-.012 4.123-.06c3.629-.167 5.652-2.182 5.816-5.817.05-1.066.061-1.407.061-4.123s-.012-3.056-.06-4.122c-.163-3.629-2.18-5.65-5.816-5.817C15.057 2.01 14.716 2 12 2m0 4.865a5.135 5.135 0 1 0 0 10.27 5.135 5.135 0 0 0 0-10.27m0 8.468a3.333 3.333 0 1 1 0-6.666 3.333 3.333 0 0 1 0 6.666m5.338-9.87a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4"></path></svg></div>
                                <div className='size-fit'><svg className='w-6' fill='white' data-tag="IconBrandTwitch" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.083 12h1.667V7h-1.667zm-2.916 0H10.5V7h1.667z"></path><path fill-rule="evenodd" d="M3 5.478 4.25 2h17.083v12.175l-5 5.215h-3.75l-2.5 2.61h-2.5v-2.61H3zm16.667 7.826V3.738H5.916v12.61h3.752v2.606l2.499-2.606h4.582z" clip-rule="evenodd"></path></svg></div>
                                <div className='size-fit'><svg className='w-6' fill='white' data-tag="IconBrandTwitter" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.712 10.622 20.413 3h-1.588l-5.818 6.618L8.36 3H3l7.027 10.007L3 21h1.588l6.144-6.989L15.64 21H21zm-2.174 2.474-.713-.997L5.16 4.17H7.6l4.571 6.4.712.996 5.943 8.319h-2.439z"></path></svg></div>
                            </div>
                        </div>
                        <div className='border-b-2 text-sm border-gray-700 h-fit w-full flex justify-center items-center gap-4'>
                            <span className='flex justify-center items-center w-fit h-10 border-b-2 border-gray-300'>Home</span>
                            <span className='flex justify-center items-center w-fit h-10'>Projects</span>
                            <span className='flex justify-center items-center w-fit h-10'>About</span>
                            <span className='flex justify-center items-center w-fit h-10'>Contributions</span>
                        </div>
                    </div>
                    <div className='w-full h-fit flex justify-center items-center gap-16 p-10'>
                        <div className='min-h-[270px] mx-5 w-1/2 h-fit p-4 bg-slate-800 rounded-lg'>
                            <h3 className='text-xl my-5 font-bold ml-5'>Recent supporters</h3>
                            <ul className='flex flex-col gap-7 text-gray-300 ml-10'>
                                    <li className='flex gap-4 items-center justify-start border-b-2 border-gray-700'><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>John</span> contributed <span className='text-white'>$20</span> with a message</div><div><span className='text-white'>"Great job!"</span></div></div></li>
                                    <li className='flex gap-4 items-center justify-start border-b-2 border-gray-700'><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>Emily</span> contributed <span className='text-white'>$30</span> with a message</div><div><span className='text-white'>"You're doing amazing work!"</span></div></div></li>
                                    <li className='flex gap-4 items-center justify-start border-b-2 border-gray-700'><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>Michael</span> contributed <span className='text-white'>$25</span> with a message</div><div><span className='text-white'>"Keep it up!"</span></div></div></li>
                                    <li className='flex gap-4 items-center justify-start border-b-2 border-gray-700'><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>Emma</span> contributed <span className='text-white'>$15</span> with a message</div><div><span className='text-white'>"You're making a difference!"</span></div></div></li>
                                    <li className={`${!show && "hidden"} flex gap-4 items-center justify-start border-b-2 border-gray-700`}><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>Daniel</span> contributed <span className='text-white'>$40</span> with a message</div><div><span className='text-white'>"Your work inspires us!"</span></div></div></li>
                                    <li className={`${!show && "hidden"} flex gap-4 items-center justify-start border-b-2 border-gray-700`}><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>Olivia</span> contributed <span className='text-white'>$10</span> with a message</div><div><span className='text-white'>"Thank you for your efforts!"</span></div></div></li>
                                    <li className={`${!show && "hidden"} flex gap-4 items-center justify-start border-b-2 border-gray-700`}><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>James</span> contributed <span className='text-white'>$50</span> with a message</div><div><span className='text-white'>"Your work is inspiring!"</span></div></div></li>
                                    <li className={`${!show && "hidden"} flex gap-4 items-center justify-start border-b-2 border-gray-700`}><span><Image className='w-10' src="/avatar.gif" alt="" /></span><div className='flex flex-col gap-2'><div><span className='text-white'>Ava</span> contributed <span className='text-white'>$35</span> with a message</div><div><span className='text-white'>"Keep doing what you're doing!"</span></div></div></li>
                                <span onClick={handleShow} className='text-blue-500 hover:underline'>{show ? "Show less" : "Show more"}</span>
                            </ul>
                        </div>
                        <div className='min-h-[270px] mx-5 w-1/2 h-fit p-4 bg-slate-800 rounded-lg'>
                            <h3 className='text-xl my-5 text-center'>Support Us</h3>
                            <div className='flex flex-col gap-3'>
                                <input type="text" className='w-full p-3 rounded-lg border-2 border-gray-700 bg-slate-800' placeholder='Please tell us your Name' />
                                <input type="text" className='w-full p-3 rounded-lg border-2 border-gray-700 bg-slate-800' placeholder='Give us your message..' />
                                <input type="text" className='w-full p-3 rounded-lg border-2 border-gray-700 bg-slate-800' placeholder='Enter Amount' />
                                <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-center p-2 px-7 mt-4 text-lg'>Pay</button>
                            </div>
                            <p className='mt-5'>Or you can simply choose from</p>
                            <div className='flex gap-2 mt-2'>
                                <button className='bg-slate-800 p-3 rounded-lg hover:bg-slate-700'>Pay $10</button>
                                <button className='bg-slate-800 p-3 rounded-lg hover:bg-slate-700'>Pay $20</button>
                                <button className='bg-slate-800 p-3 rounded-lg hover:bg-slate-700'>Pay $30</button>
                                <button className='bg-slate-800 p-3 rounded-lg hover:bg-slate-700'>Pay $40</button>
                                <button className='bg-slate-800 p-3 rounded-lg hover:bg-slate-700'>Pay $50</button>
                            </div>
                            <p className='mt-5'>Thank you for your valuable contribution. 🙏</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MyAccount
