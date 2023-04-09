import { createTheme } from '@mui/material'
import { dark } from '@mui/material/styles/createPalette'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#4184B4',
			light: '#D2E3EF'
		},
		secondary: {
			main: '#ACCBE1'
		},
		error: {
			main: '#F15757'
		},

		mode: 'dark'
	}
})
