import About from "./components/About";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Tools from "./components/Tools";

function App() {
  return (
    <div className="flex justify-center flex-col mt-24 ml-24">
      <Introduction />
      <Stats />
      <Projects />
      <About />
      <Services />
      <Resume />
      <Tools />
      <Contact />
    </div>
  );
}

export default App;
