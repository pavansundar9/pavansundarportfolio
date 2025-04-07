import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
       <Navbar />  
       <Hero />
       <AboutMe />
       <Skills />
       <Projects />
       <ContactMe />
    </div>
  );
}

export default App;
