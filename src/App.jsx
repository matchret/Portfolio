import { NavBar } from './Composant/Navbar';
import { Banner } from './Composant/Banner'
import { Skills } from './Composant/Skills';
import { Project } from './Composant/Projects';
import { ContactForm } from './Composant/ContactForm'
import { Footer } from './Composant/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



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
