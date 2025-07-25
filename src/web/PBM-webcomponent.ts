import React from 'react';
import ReactDOM from 'react-dom/client';
import reactToWebComponent from 'react-to-webcomponent';
import PBMWebWrapper from './PBMWebWrapper';

const PBMElement = reactToWebComponent(PBMWebWrapper, React, ReactDOM, {
    props: {
        originalProductPrice: 'string', // vai chegar como string e o wrapper lida
        industryLogo: 'string',
    }
});

customElements.define('pbm-component', PBMElement);
