import ToolsCard from "./shared/ToolsCard";

function Tools() {
  return (
    <div>
      <h2 className="text-4xl font-bold mt-28">My favorite tools</h2>
      <div className="flex mt-6 gap-12 flex-wrap">
        <ToolsCard image="./images/tools/figma.svg" title="Figma" />
        <ToolsCard image="./images/tools/css3.svg" title="CSS" />
        <ToolsCard
          image="./images/tools/tailwindcss.svg"
          title="Tailwind CSS"
        />
        <ToolsCard image="./images/tools/react.svg" title="React" />
        <ToolsCard image="./images/tools/javascript.svg" title="Javascript" />
        <ToolsCard image="./images/tools/nodejs.svg" title="Node.js" />
        <ToolsCard image="./images/tools/expressjs.svg" title="Express.js" />
        <ToolsCard image="./images/tools/mongodb.svg" title="Mongodb" />
      </div>
    </div>
  );
}

export default Tools;
