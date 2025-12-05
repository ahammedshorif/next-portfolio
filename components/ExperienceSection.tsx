"use client";
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer",
      description: "Full-stack development across web, mobile, and blockchain",
      company: "Self Employed",
      status: "Current",
      position: "Internship",
      date: "Sep 4, 2025",
      tag: { tag1: "Next.js", tag2: "Express.js" , tag3:"Typescript" },
    },
  ];

  return (
    <div className="w-full flex justify-center mt-3">
      <div className="w-full md:w-[95%] ml-2">
        <h1 className="text-2xl text-blue-400 pt-5">Experience</h1>
        <p className="text-[#8B8B8B] pt-1">
          Here's a timeline of my professional journey, showcasing my roles and
          contributions in full-stack development.
        </p>

        <div className="flex flex-col gap-5 mt-3">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className=" flex flex-col justify-between min-h-[250px] p-3 bg-[#1A1A1A] rounded-lg cursor-pointer transition hover:bg-neutral-800 md:min-h-[216px] md:py-6 md:px-7 "
            >
              <div className="flex gap-3 my-2 mx-2">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-blocks w-5 h-5 text-green-400"
                  >
                    <rect width="7" height="7" x="14" y="3" rx="1"></rect>
                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
                  </svg>
                </div>
                <div>
                  <h1 className="text-lg text-white font-bold md:text-xl  ">
                    {experience.title}{" "}
                    <span className="text-sm text-[#8B8B8B] ml-2">. {experience.company}</span>
                  </h1>
                  <h4 className="text-sm text-[#8B8B8B] my-2 ">
                    {experience.status}
                  </h4>
                  <p className="text-sm text-[#8B8B8B]">{experience.description}</p>
                </div>

              </div>

              <div className="text-xs flex gap-2 my-3 mx-2">
                <span className="p-1 rounded-md bg-neutral-700 border-neutral-700 hover:border-black hover:bg-neutral-900">
                  {experience.tag.tag1}
                </span>
                <span className="p-1 rounded-md bg-neutral-700 border-neutral-700 hover:border-black hover:bg-neutral-900">
                  {experience.tag.tag2}
                </span>
                <span className="p-1 rounded-md bg-neutral-700 border-neutral-700 hover:border-black hover:bg-neutral-900">
                  {experience.tag.tag3}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
