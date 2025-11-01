import ProfileSection from "@/components/ProfileSection";
import Project from "../components/ProjectSection";
export default function Home() {
  return (
    <main
      className="w-full h-screen flex justify-center font-serif"
      style={{
        background: "#000000",
        backgroundImage: `
          linear-gradient(to right, rgba(75, 85, 99, 0.4) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(75, 85, 99, 0.4) 1px, transparent 1px)
          `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className=" w-full p-5 mx-2 md:w-[70%] bg-black">
           <ProfileSection></ProfileSection>
          <Project></Project>
      </div>
      
    </main>
  );
}


