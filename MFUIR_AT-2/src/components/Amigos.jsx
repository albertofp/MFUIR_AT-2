import { Box, Typography } from '@mui/material'
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
				color='primary.light'
			>
				Amigos
			</Typography>
			{genAmigo('amigo(s) em comum')}
		</Box>
	)
}

export default Amigos
