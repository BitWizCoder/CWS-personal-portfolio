import SectionIntro from "./shared/SectionIntro";

function Projects() {
  return (
    <div className="mt-28">
      <SectionIntro heading="My featured projects" subHeading="Projects" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="overflow-hidden rounded-md">
          <img
            src="./images/project-ph-1.jpeg"
            alt="project 1"
            className="rounded-md transition duration-500 hover:scale-115 w-full"
          />
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src="./images/project-ph-2.jpeg"
            alt="project 1"
            className="rounded-md transition duration-500 hover:scale-115 w-full"
          />
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src="./images/project-ph-3.jpeg"
            alt="project 1"
            className="rounded-md transition duration-500 hover:scale-115 w-full"
          />
        </div>
        <div className="overflow-hidden rounded-md">
          <img
            src="./images/project-ph-4.jpeg"
            alt="project 1"
            className="rounded-md transition duration-500 hover:scale-115 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
