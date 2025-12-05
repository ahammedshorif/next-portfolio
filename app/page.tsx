import ProfileSection from "@/components/ProfileSection";
import Project from "../components/ProjectSection";
import ExperienceSection from "@/components/ExperienceSection";
export default function Home() {
  return (
    <main
      className="w-full min-h-screen flex justify-center Open Sans"
      style={{
        background: "#000000",
        backgroundImage: `
          linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
          `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className=" w-full min-h-screen p-5 md:w-[70%] ">
           <ProfileSection></ProfileSection>
           <ExperienceSection></ExperienceSection>
           <Project></Project>
      </div>
      
    </main>
  );
}


