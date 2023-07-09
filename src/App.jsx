

import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-pdf/dist/esm/Page/TextLayer.css';     //react-pdf (remove warning/text hidden)
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import {NavBar} from './Composant/Navbar';
import { Banner } from './Composant/Banner';
import { Skills } from './Composant/Skills';
import { Project } from './Composant/Projects';
import { ContactForm } from './Composant/ContactForm';
import { Footer } from './Composant/Footer'
import config from './aws-exports'
import { AmplifyProvider } from '@aws-amplify/ui-react';
import './App.css';
import { Amplify } from 'aws-amplify';

Amplify.configure(config)

function App() {

  return (
    <AmplifyProvider>
     <NavBar />
     <Banner />
     <Skills />
     <Project />
     <ContactForm />
     <Footer />
    </AmplifyProvider>
  )
}

export default App
