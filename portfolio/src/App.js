import Intro from "./Intro";
import "./App.css";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Academics from "./Academics";
import Home from "./Home";
import Tech from "./Tech";

function App() {
  return (
    <div className="App">
       <Home />
       <Intro />
       <Tech />
       <Projects />
       <Academics />
       <Contact />
       <Footer />
    </div>
  );
}

export default App;
