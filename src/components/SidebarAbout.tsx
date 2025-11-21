import { Button } from "./ui/button";

export default function SidebarAbout() {
  return (
    <div
      className="bg-neutral-900 border border-neutral-700 max-w-md p-12 rounded-sm mt-6
     ml-6"
    >
      <div>
        <h2>David</h2>
        <p>Frontend Designer & Developer</p>
        <img src="" alt="" />
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
