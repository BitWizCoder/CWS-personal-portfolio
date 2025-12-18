import About from "./components/About";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="flex justify-center flex-col mt-24 ml-24">
      <Introduction />
      <Stats />
      <Projects />
      <About />
      <Services />
    </div>
  );
}

export default App;
