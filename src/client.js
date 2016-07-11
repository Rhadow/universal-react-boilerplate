// import React from 'react';
import { render } from 'react-dom';
import appRoutes from './shared/routes';

render(
    appRoutes(),
    document.getElementById('react-view')
);
