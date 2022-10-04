import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Experience from "./components/Experience";
import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import project from "./data/projects";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Header />
      <AboutMe />
      <Projects item={project} />
      <Skills />
      <Experience />
      <ContactMe />
    </>
  );
};

export default App;
