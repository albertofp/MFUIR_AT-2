import React from 'react'
import {Typography, Paper } from '@mui/material'
import genAmigo from '../utils/genAmigo'

function SugestaoAmigos() {
	return (
		<Paper
			position='fixed'
			width={250}
			sx={{ border: '1px solid' }}
		>
			<Typography
				variant='h6'
				fontWeight={150}
			>
				Sugestão de Amizades
			</Typography>
			{genAmigo(`amigo(s) em comum, entre eles`,true)}
		</Paper>
	)
}

export default SugestaoAmigos
