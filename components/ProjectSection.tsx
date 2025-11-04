"use client"
const ProjectSection = () => {

  const projects = [
    {
      title: "When process.env Bites Back: A Node.js Performance Lesson",
      description: "During a past job, I was working on optimizing an internal API service. Here's what we had:",
      date: "May 4, 2025",
      link: "https://www.google.com",
    },
    {
      title: "Cookie-based Authentication: A Simple Guide for Secure Sessions",
      description:
        "What is Authentication? Authentication is the process of verifying the identity of a user, device, or entity in a system. It ensures that...",
      date: "Jul 12, 2024",
      link: "",
    },
    {
      title: "Understanding TypeScript's Handling of Object Literal Types",
      description:
        "Did you know that TypeScript's handling of object literals can sometimes lead to unexpected behavior? when I started learning...",
      date: "Jun 20, 2024",
      link:""
    },
  ]

  function handleClick(link:string){
     
     location.href = link;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-[95%]">
        <h1 className="text-2xl text-blue-400 pt-5 ">Project</h1>
        <p className="text-[#8B8B8B] pt-1">
          A collection of my work spanning from blockchain applications to
          full-stack projects, both personal and professional.
        </p>
        <div className="flex flex-col gap-5 mt-3">
            {projects.map((project,index)=> (
              <div key={index} 
              onClick={()=>{handleClick(project.link)}}
              className=" flex flex-col flex-start pt-4 bg-[#1A1A1A] md:min-h-[140px] p-3 rounded-lg cursor-pointer ">
                  <h1 className="text-lg text-white mb-2">{project.title}</h1> 
                  <h4 className="text-sm text-white]">{project.description}</h4>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
