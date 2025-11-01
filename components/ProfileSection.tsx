import Image from "next/image";
import { Github, Instagram, Twitter } from "lucide-react";
const ProfileSection = () => {
  return (
    <div>
      <div className="flex justify-between mt-12">
        <div>
          <Image
            src="/profile.png"
            alt="Description of my image"
            width={100}
            height={100}
            className="rounded-xl"
          />
          <h1 className="text-4xl mt-4 font-md">Hi, I'm Shorif</h1>
          <p className="text-[#8B8B8B]">Cumilla | Full Stack Developer</p>
          <p className="w-[75%] text-[#8B8B8B] mt-4">
            I’m a Full Stack Developer building high-performance, scalable, and
            user-focused applications. From architecting robust back-end systems
            to crafting clean and intuitive front-end interfaces, I turn complex
            ideas into seamless digital experiences. I specialize in
            transforming requirements into efficient, modern, and
            production-ready solutions across the entire development stack.
          </p>
        </div>
        <div className="flex gap-7 pt-4 pr-4">
          <a href="https://github.com/ahammedshorif/" target="to_blank">
            {" "}
            <Github
              size={25}
              color="#ffffff"
              strokeWidth={1.25}
              className="cursor-pointer"
            />
          </a>
          <a href="https://github.com/ahammedshorif/" target="to_blank">
            {" "}
            <Instagram
              size={25}
              color="#ffffff"
              strokeWidth={1.25}
              className="cursor-pointer"
            />
          </a>
          <a href="https://github.com/ahammedshorif/" target="to_blank">
            {" "}
            <Twitter
              size={25}
              color="#ffffff"
              strokeWidth={1.25}
              className="cursor-pointer"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
