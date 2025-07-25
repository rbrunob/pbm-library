import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import PBM from '../PBM';

const PBMElement = reactToWebComponent(PBM, React, ReactDOM);

// Define o custom element: <pbm-component />
customElements.define('pbm-component', PBMElement);