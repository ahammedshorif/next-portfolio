"use client";
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      description: "Full-stack development across web, mobile, and blockchain",
      company: "Demo",
      status: "current",
      position: "Internship",
      date: "Sep 4, 2025",
      tag: { language: "NextJs", liabery: "ExpressJs" },
    },
  ];

  function handleClick(link: string) {
    location.href = link;
  }

  return (
    <div className="w-full flex justify-center">
      <div className="w-full md:w-[95%] ml-2">
        <h1 className="text-2xl text-blue-400 pt-5">Experience</h1>
        <p className="text-[#8B8B8B] pt-1">
          Here's a timeline of my professional journey, showcasing my roles and
          contributions in blockchain and full-stack development.
        </p>

        <div className="flex flex-col gap-5 mt-3">
          {experiences.map((experience, index) => (
            <div
              key={index}
              onClick={() => {
                handleClick(experience.link);
              }}
              className=" flex flex-col justify-between py-6 px-6 bg-[#1A1A1A] hover:bg-neutral-800 md:min-h-[216px] p-3 rounded-lg cursor-pointer transition  "
            >
                <div className="flex gap-4 my-2 mx-2">
                    <div>| |</div>
                    <div>
                        <h1 className="text-xl text-white font-bold ">{experience.title} <span className="text-sm">{experience.company}</span></h1>
                        <h4 className="text-sm text-[#8B8B8B] my-2 ">{experience.position}</h4>
                        <p className="text-sm">{experience.description}</p>
                          
                    </div>
                </div>

                <div className="text-sm flex gap-2 my-2 mx-2">
                    <span className="p-1 rounded-md bg-neutral-700 border-neutral-700 hover:border-black hover:bg-neutral-900">{experience.tag.language}</span>
                    <span className="p-1 rounded-md bg-neutral-700 border-neutral-700 hover:border-black hover:bg-neutral-900">{experience.tag.liabery}</span>
                   
                </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
