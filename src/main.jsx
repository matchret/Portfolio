import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import global_en from '../src/assets/Translation/En/translation.json';
import global_fr from '../src/assets/Translation/Fr/translation.json';


i18next
.use(initReactI18next)
.init({
  interpolation: {EscapeValue: false},
  lng: "Fr",
  resources: {
    Fr:{translation: global_fr},
    En:{translation: global_en}
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
