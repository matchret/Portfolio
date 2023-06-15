import { NavBar } from './Composant/Navbar';
import { Banner } from './Composant/Banner'
import { Skills } from './Composant/Skills';
import { Footer } from './Composant/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route , Routes} from 'react-router-dom';
/*
const Banner = lazy(() => import('./Composant/Banner'));

<Suspense>
<BrowserRouter>
<Routes>
  <Route name="login" exact path="/login" component={props => <Banner {...props} />} />
  </Routes>
  </BrowserRouter>
</Suspense>
*/



function App() {
  return (
    <>
        <NavBar />
        <Banner />
        <Skills />
        <Footer />
    </>
  )
}

export default App
