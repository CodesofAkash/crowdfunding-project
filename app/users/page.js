"use client"
import Head from 'next/head';
import Link from 'next/link';
import { fetchProjects } from '@/actions/useractions';
import { useState, useEffect } from 'react';

const Contribute = () => {

    const [users, setusers] = useState([]);
    console.log(users)
    
    useEffect(() => {
      fetchData();
    }, [])
    
    const fetchData = async () => {
      let u = await fetchProjects();
      setusers(u);
      console.log(users)
    }


  return (
    <div className="min-h-screen py-2 px-4 sm:px-6 lg:px-8">
      {users.length<1? <div>No Projects to contribute to</div> : <div>
      <Head>
      <title>Contribute to a Project</title>
      <meta name="description" content="Contribute to a crowdfunding project." />
    </Head>
    <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
      <h1 className="text-5xl font-bold my-10">Contribute to a Project</h1>
      <div className="w-full max-w-3xl">
      {users.map(user => (
          <div key={user._id} className="border-2 w-full border-gray-700 shadow-md rounded-lg flex items-center p-6 mb-10">
            <img src={user.profilePic} alt={user.projectName} className="w-16 h-16 rounded-full mr-4" />
            <div className="text-left flex-grow">
              <h2 className="text-2xl font-semibold mb-1">{user.projectName}</h2>
              <p className="text-lg mb-2">By {user.creatorName}</p>
              <p className="text-gray-400 mb-4">{user.description}</p>
            </div>
            <Link href={{ pathname: `/${user.username}`, query: { userData: JSON.stringify(user) } }}>
              <div className="text-blue-500 hover:underline ml-4">Contribute</div>
            </Link>
          </div>
        ))}
      </div>
    </main>
    </div>
    }
    </div>
  );
};

export default Contribute;
