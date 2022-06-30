import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./LandingPage/LandingPage";
import AboutMe from "./AboutMe/AboutMe";
import Contact from "./Contact/Contact";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <AboutMe />
      <Contact />
    </div>
  );
}

export default App;
