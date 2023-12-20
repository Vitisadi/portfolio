import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar";
import Seasons from "./components/Seasons";
// import { Skills } from "./components/Skills";
// import { Projects } from "./components/Projects";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Seasons />
      {/* <Skills />
      <Projects />
      <Contact />
      <Footer /> */}
    </div>
  );
}

export default App;
