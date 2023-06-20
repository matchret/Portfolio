import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css';
import './index.css'
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';
import global_en from '../src/assets/Translation/En/global.json';
import global_fr from '../src/assets/Translation/Fr/global.json';

import { AmplifyProvider } from '@aws-amplify/ui-react';
import config from './aws-exports.js';
import { Amplify } from 'aws-amplify';

Amplify.configure(config)

i18next.init({
  interpolation: {EscapeValue: false},
  lng: "En",
  resources: {
    Fr:{
      global: global_fr
    },
    En:{
      global: global_en
    }
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AmplifyProvider>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
    </AmplifyProvider>
  </React.StrictMode>,
)
