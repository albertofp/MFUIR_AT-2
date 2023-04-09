import {
	Avatar,
	Box,
	Typography,
	ListItem,
	ListItemText,
	ListItemAvatar,
	Divider,
	Stack
} from '@mui/material'
import React from 'react'
import getRandomInt from '../utils/getRandomInt'
import { faker } from '@faker-js/faker'
import AmigosOnline from './AmigosOnline'
import Amigos from './Amigos'

const Friendsbar = () => {
	return (
		<Stack
			direction='column'
			spacing={10}
		>
			<AmigosOnline />
			<Amigos max='4' />
		</Stack>
	)
}

export default Friendsbar
