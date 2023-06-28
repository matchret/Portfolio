import { NavBar } from './Composant/Navbar';
import { Banner } from './Composant/Banner'
//import { Skills } from './Composant/Skills';
//import { Project } from './Composant/Projects';
//import { ContactForm } from './Composant/ContactForm'
//import { Footer } from './Composant/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import React, {Suspense} from 'react';

//const Skills = React.lazy(() => import('./Composant/Skills'));
const Project = React.lazy(() => import('./Composant/Projects'));
//const ContactForm = React.lazy(() => import('./Composant/ContactForm'));
//const Footer = React.lazy(() => import('./Composant/Footer'));


function App() {
  return (
    <>
        <NavBar />
        <Banner />
        <Suspense fallback={<div>Loading ...</div>}>
          <Project />
        </Suspense>
    </>
  )
}

export default App
