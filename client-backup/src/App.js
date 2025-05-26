import './App.css';
import {NavBar} from './components/NavBar';
import {Banner} from './components/Banner';
import {Skills} from './components/Skills';
import {Projects} from './components/Projects';
import {ProjectCards} from './components/ProjectCards';
import { Contact } from './components/Contact';
import { Server } from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <ProjectCards />
      <Contact />
      <Server />
    </div>
  );
}

export default App;
