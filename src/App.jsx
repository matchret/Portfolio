

import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-pdf/dist/esm/Page/TextLayer.css';     //react-pdf (remove warning/text hidden)
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import {NavBar} from './Composant/Navbar';
import { Banner } from './Composant/Banner';
import { Skills } from './Composant/Skills';
import { Project } from './Composant/Projects';
import { ContactForm } from './Composant/ContactForm';
import { Footer } from './Composant/Footer'

import './App.css';


function App() {

  return (
    <>
     <NavBar />
     <Banner />
     <Skills />
     <Project />
     <ContactForm />
     <Footer />
    </>
  )
}

export default App
