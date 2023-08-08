import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Experiences from './Components/Experiences';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import {ShowModeProvider} from "./ShowContext";

function App() {

  return (
    <ShowModeProvider>
       <Navbar />
       <Home />
       <About />
       <Experiences />
       <Portfolio />
       <Contact />
       <Footer />
    </ShowModeProvider>
  );
}

export default App;
