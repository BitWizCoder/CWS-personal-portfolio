import { Sparkle } from "lucide-react";
import { Button } from "./ui/button";

export default function Introduction() {
  return (
    <div>
      <p className="border border-gray-400 w-38 py-2 px-2 rounded-sm mb-3 flex justify-around items-center">
        <Sparkle />
        Introduction
      </p>
      <h1 className="text-6xl w-2xl mb-6">
        I'm David UI/UX designer and frontend developer.
      </h1>
      <div className="flex gap-4">
        <Button>My Projects</Button>
        <Button variant={"outline"}>Download CV</Button>
      </div>
    </div>
  );
}
