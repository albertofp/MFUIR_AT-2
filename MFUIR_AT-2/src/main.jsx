import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material'

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</ThemeProvider>
)
