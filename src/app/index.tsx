import React from 'react';
import { Routing } from 'pages';
import './index.css';
import { withProviders } from './providers';

const App = () => <Routing />

export default withProviders(App);
