import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';
import { theme as proTheme } from '@chakra-ui/pro-theme';
import { extendTheme, theme as baseTheme } from '@chakra-ui/react';

// Supports weights 100-900
import '@fontsource-variable/inter';

export const theme = extendTheme(
	{
		colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
		fonts: {
			heading: "'Inter Variable', -apple-system, system-ui, sans-serif",
			body: "'Inter Variable', -apple-system, system-ui, sans-serif",
		},
	},
	proTheme
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<ChakraProvider theme={theme}>
		<App />
	</ChakraProvider>
);
