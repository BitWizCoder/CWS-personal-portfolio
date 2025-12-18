import { Sparkle } from "lucide-react";

function SectionIntro({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) {
  return (
    <div>
      <p className="border border-gray-400 w-38 py-1 px-2 rounded-sm mb-3 flex justify-around items-center text-lg">
        <Sparkle size={18} />

        {subHeading}
      </p>
      <h1 className="text-6xl w-2xl mb-6">{heading}</h1>
    </div>
  );
}

export default SectionIntro;
