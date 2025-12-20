import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import SidebarAbout from "./components/SidebarAbout";
import Stats from "./components/Stats";
import Tools from "./components/Tools";

function App() {
  return (
    <div className="flex">
      <SidebarAbout />
      <div className="max-w-7xl pl-[600px] mt-22">
        <Introduction />
        <Stats />
        <Projects />
        <About />
        <Services />
        <Resume />
        <Tools />
        <Contact />
      </div>
    </div>
  );
}

export default App;
