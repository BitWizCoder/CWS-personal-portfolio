import About from "./components/About";
import Introduction from "./components/Introduction";
import Projects from "./components/Projects";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="flex justify-center flex-col mt-24 ml-24">
      <Introduction />
      <Stats />
      <Projects />
      <About />
    </div>
  );
}

export default App;
