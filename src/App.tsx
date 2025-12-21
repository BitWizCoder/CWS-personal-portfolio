import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Sidebar from "./components/Sidebar";
import SidebarAbout from "./components/SidebarAbout";
import Stats from "./components/Stats";
import Tools from "./components/Tools";

function App() {
  return (
    <div className="flex flex-col justify-between lg:flex-row">
      <SidebarAbout />
      <div className="mt-22 p-10 lg:pl-24 max-w-4xl">
        <Introduction />
        <Stats />
        <Projects />
        <About />
        <Services />
        <Resume />
        <Tools />
        <Contact />
      </div>
      <Sidebar />
    </div>
  );
}

export default App;
