import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');

ReactDOM.render(
    <ChakraProvider>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ChakraProvider>,
    root
);
reportWebVitals();
