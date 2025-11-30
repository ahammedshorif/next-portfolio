"use client";
const ProjectSection = () => {
  const projects = [
    {
      title: "Solana Token Launchpad",
      description:
        "A Solana Token Launchpad built in React using @solana/web3.js and @solana/spl-token enables users to create, mint, and manage Solana tokens through a seamless decentralized UI. It provides wallet integration, token configuration, and on-chain deployment for fast and secure token launches.",
      date: "Sep 4, 2025",
      tag: { language: "ReactJS", liabery: "@solan/spl" },
      link: "https://github.com/ahammedshorif/solana-token-launchpad",
    },
    {
      title: "Simple video Calling Application",
      description:
        "A real-time video calling application built using Node.js, WebRTC, and WebSocket enables seamless peer-to-peer video communication through a browser-based interface. It provides secure media streaming, signaling for connection setup, and low-latency audio-video transmission without external plugins, allowing users to connect and communicate instantly over the web.",
      date: "Jul 12, 2024",
      tag: { language: "NodeJS", liabery: "webRTC" },
      link: "https://github.com/ahammedshorif/video-calling-app-webRTC",
    },
    {
      title: "Ride Sharing Application | Uber Clone",
      description:"A ride-sharing application inspired by Uber, built with real-time location tracking, driver-rider matching, and secure booking features. It enables users to request rides, view driver details, track trips on an interactive map, and make digital payments, while drivers can accept bookings, navigate routes, and manage rides seamlessly. The platform offers a smooth, responsive UI and reliable backend services for efficient and safe transportation.",

      date: "Jun 20, 2024",
      tag: { language: "ReactJS", liabery: "ExpressJS" },
      link: "https://github.com/ahammedshorif/ride-sharing-app",
    },
     {
      title: "Personal Trading Journal Manager",
      description:
        "A personal trading journal manager designed to help traders track, analyze, and improve their trading performance It allows users to log trades with key details such as entry/exit points, asset type, strategy, and profit/loss, while providing visual analytics, performance insights, and risk metrics. The platform helps traders review decisions, identify patterns, and develop disciplined trading habits through organized data and actionable reports.",
      date: "Jun 20, 2024",
      tag: { language: "NextJS", liabery: "ExpressJS" },
      link: "https://github.com/ahammedshorif/trading-journal-manager",
    },
  ];

  function handleClick(link: string) {
    location.href = link;
  }

  return (
    <div className="w-full flex justify-center my-3">
      <div className="w-full md:w-[95%] ml-2">
        <h1 className="text-2xl  text-blue-400 pt-5 ">Project</h1>
        <p className="text-[#8B8B8B] pt-1">
          A collection of my work spanning from blockchain applications to
          full-stack projects, both personal and professional.
        </p>
        <div className="flex flex-col gap-5 mt-4  md:grid md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => {
                handleClick(project.link);
              }}
              className=" flex flex-col justify-between py-7 px-6 bg-[#1A1A1A] hover:bg-linear-to-r from-zinc-500 via-stone-600 to-zinc-900 md:min-h-[200px] p-3 rounded-lg cursor-pointer transition  "
            >
              <div>
                <h1 className="text-lg text-white font-bold mb-3">{project.title}</h1>
                <h4 className="text-sm text-white line-clamp-2">{project.description}</h4>
              </div>
              <div className="mt-3 flex gap-3 text-sm"> 
                <span className="p-1 rounded-md bg-neutral-700 border-neutral-700 hover:border-black hover:bg-neutral-900">
                  {project.tag?.language}
                </span>
                <span className="p-1 rounded-md bg-neutral-700 border-neutral-700 hover:border-black hover:bg-neutral-900">
                  {project.tag?.liabery}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
