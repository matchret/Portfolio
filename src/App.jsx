import { NavBar } from './Composant/Navbar';
import { Banner } from './Composant/Banner'
import { Skills } from './Composant/Skills';
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
        <ContactForm />
        <Footer />
    </>
  )
}

export default App
