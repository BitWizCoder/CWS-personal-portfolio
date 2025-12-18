import { Button } from "./ui/button";
import SectionIntro from "./shared/SectionIntro";

export default function Introduction() {
  return (
    <div>
      <SectionIntro
        heading="I'm David UI/UX designer and frontend developer."
        subHeading={"Introduction"}
      />

      <div className="flex gap-4">
        <Button>My Projects</Button>
        <Button variant={"outline"}>Download CV</Button>
      </div>
    </div>
  );
}
