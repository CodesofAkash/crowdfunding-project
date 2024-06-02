"use client"
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

const Home = () => {

    const [mode, setmode] = useState("Contributor");
    const { data : session } = useSession();
    

  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Welcome to Get-me-a-Chai</title>
        <meta name="description" content="Choose to either contribute to a project or create your own crowdfunding project." />
      </Head>
      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <h1 className="text-5xl font-bold mb-10">Welcome to Get me a Chai</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center w-full max-w-3xl">
          <Link href="/users">
          <div onClick={()=>{setmode("Contributor")}} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-8 py-3 mx-7 text-center me-2 mb-2">
              Contribute to a Project
            </div>
          </Link>
          <Link href="/dashboard">
          <div onClick={()=>{setmode("Creator")}} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-8 py-3 mx-7 text-center me-2 mb-2">
              Create a Project
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;