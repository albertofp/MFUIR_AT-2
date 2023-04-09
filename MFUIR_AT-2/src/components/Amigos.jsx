import {
	Box,
	Divider,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
	Avatar
} from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker'
import getRandomInt from '../utils/getRandomInt'
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
				textAlign='center'
			>
				Amigos
			</Typography>
			{genAmigo('amigos em comum')}
		</Box>
	)
}

export default Amigos
