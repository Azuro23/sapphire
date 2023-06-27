import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
// Supports weights 100-900
import '@fontsource-variable/inter';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider>
		<App />
	</ChakraProvider>
);
