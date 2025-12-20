import { Button } from "./ui/button";

export default function SidebarAbout() {
  return (
    <div
      className="bg-neutral-900 border border-neutral-700 max-w-sm p-6 rounded-lg mt-6
     ml-6 h-[600px]"
    >
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl">David</h2>
          <p>Frontend Designer & Developer</p>
        </div>
        <img src="./avatar.jpg" alt="Avatar" className="rounded-md" />
        <div>
          <p>Specialization:</p>
          <h2>UI/UX designer and frontend developer</h2>
        </div>
        <div>
          <p>Based in:</p>
          <h2>Based in Los Angeles, CA</h2>
        </div>

        <Button>Let's Work!</Button>
      </div>
    </div>
  );
}
