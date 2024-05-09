export default function Home() {
  return (
    <>
      <div className="text-white p-4 flex flex-col gap-4 justify-center items-center h-[44vh]">
        <div className="font-bold text-5xl flex justify-center items-center gap-10">Buy me a Chai. <span><Image className="w-20 h-25" src="/chai.gif"/></span></div>
        <p>A crowddfunding platform for creators. Get funded by your fans and followers.</p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div> 
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-14">Your fans can buy you a Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black h-[88px] w-[88px]" src="/man.gif" alt="error" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full text-black h-[88px] w-[88px]" src="/coin.gif" alt="error" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full p-2 text-black h-[88px] w-[88px]" src="/group.gif" alt="error" />
            <p className="font-bold">Fans want to help</p>
            <p>Your fans are available for you to help you.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="text-white container mx-auto py-32">
        <h1 className="text-3xl font-bold text-center mb-14">Learn more about us</h1>
        <div className="flex justify-center items-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=448urKhUNJBgD4mj" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>

    </>
  );
}