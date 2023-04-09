import {
	Box,
	Typography,
} from '@mui/material'
import React from 'react'
import genAmigo from '../utils/genAmigo'

function Amigos() {
	return (
		<Box
			position='fixed'
			width={250}
		>
			<Typography
				variant='h6'
				fontWeight={150}
			>
				Amigos
			</Typography>
			{genAmigo('amigos em comum')}
		</Box>
	)
}

export default Amigos
