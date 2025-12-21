import { Button } from "./ui/button";

export default function SidebarAbout() {
  return (
    <div
      className="bg-neutral-900 border border-neutral-700  p-6 rounded-lg
     lg:ml-6 lg:sticky top-6 h-fit m-6 max-w-3xl lg:w-96"
    >
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="font-bold text-2xl">David</h2>
          <p>Frontend Designer & Developer</p>
        </div>
        <img
          src="./avatar.jpg"
          alt="Avatar"
          className="lg:w-96 rounded-2xl object-cover"
        />
        <div>
          <p>Specialization:</p>
          <h2>UI/UX designer and frontend developer</h2>
        </div>
        <div>
          <p>Based in:</p>
          <h2>Based in Los Angeles, CA</h2>
        </div>

        <Button className="w-full">Let's Work!</Button>
      </div>
    </div>
  );
}
