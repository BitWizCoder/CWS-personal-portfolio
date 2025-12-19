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
    <div className="flex justify-center mt-24 ml-24">
      <SidebarAbout />
      <div>
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
