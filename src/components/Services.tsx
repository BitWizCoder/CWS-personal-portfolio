import { Palette } from "lucide-react";
import SectionIntro from "./shared/SectionIntro";

function Services() {
  return (
    <div className="mt-24">
      <SectionIntro
        heading="Building with Purpose & Precision
"
        subHeading="Services"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-gray-500 flex p-4 rounded-lg">
          <div>
            <h2>Brand Identity</h2>
            <p>
              I craft modern visual identities that help brands stand out
              through strong typography, colors, and minimal design.
            </p>
            <p>32 Projects</p>
          </div>
          <Palette className="text-green-400" />
        </div>
        <div className="border border-gray-500 flex p-4 rounded-lg">
          <div>
            <h2>Brand Identity</h2>
            <p>
              I craft modern visual identities that help brands stand out
              through strong typography, colors, and minimal design.
            </p>
            <p>32 Projects</p>
          </div>
          <Palette />
        </div>
        <div className="border border-gray-500 flex p-4 rounded-lg">
          <div>
            <h2>Brand Identity</h2>
            <p>
              I craft modern visual identities that help brands stand out
              through strong typography, colors, and minimal design.
            </p>
            <p>32 Projects</p>
          </div>
          <Palette />
        </div>
        <div className="border border-gray-500 flex p-4 rounded-lg">
          <div>
            <h2>Brand Identity</h2>
            <p>
              I craft modern visual identities that help brands stand out
              through strong typography, colors, and minimal design.
            </p>
            <p>32 Projects</p>
          </div>
          <Palette />
        </div>
        <div className="border border-gray-500 flex p-4 rounded-lg">
          <div>
            <h2>Brand Identity</h2>
            <p>
              I craft modern visual identities that help brands stand out
              through strong typography, colors, and minimal design.
            </p>
            <p>32 Projects</p>
          </div>
          <Palette />
        </div>
      </div>
    </div>
  );
}

export default Services;
