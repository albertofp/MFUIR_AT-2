import React from 'react'
import { Box, Typography } from '@mui/material'
import genAmigo from '../utils/genAmigo'
import { faker } from '@faker-js/faker'

function SugestaoAmigos() {
	return (
		<Box
			position='fixed'
			width={250}
		>
			<Typography
				variant='h6'
				fontWeight={150}
			>
				Sugestão de Amizades
			</Typography>
			{genAmigo(`amigos em comum, entre eles ${faker.name.fullName()}`)}
		</Box>
	)
}

export default SugestaoAmigos
