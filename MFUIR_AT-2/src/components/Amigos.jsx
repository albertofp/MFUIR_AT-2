import {Typography,Paper } from '@mui/material'
import React from 'react'
import genAmigo from '../utils/genAmigo'

function Amigos() {
	return (
		<Paper
			position='fixed'
			width={250}
			padding={2}
			sx={{border:'1px solid'}}
		>
			<Typography
				variant='h6'
				fontWeight={150}
				color='primary.light'
			>
				Amigos
			</Typography>
			{genAmigo('amigo(s) em comum')}
		</Paper>
	)
}

export default Amigos
