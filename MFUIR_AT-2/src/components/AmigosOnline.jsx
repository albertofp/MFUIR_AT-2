import React from 'react'
import getRandomInt from '../utils/getRandomInt'
import { faker } from '@faker-js/faker'
import { Avatar, AvatarGroup, Box, Paper, Typography } from '@mui/material'

function genFriends(min, max) {
	const qtdFriends = getRandomInt(min, max)
	let chain = []
	for (let i = 0; i < qtdFriends; i++) {
		chain.push(
			<Avatar
				alt={faker.name.fullName()}
				src={faker.image.avatar()}
			></Avatar>
		)
	}
	return [<>{chain}</>]
}

function AmigosOnline() {
	return (
		<Paper
			position='fixed'
			width={250}
		>
			<Typography
				variant='h6'
				fontWeight={150}
				color='primary.light'
			>
				Amigos Online
			</Typography>
			<div style={{ display: 'flex', justifyContent: 'flex-start' }}>
				<AvatarGroup max={5}>{genFriends(3, 7)}</AvatarGroup>
			</div>
		</Paper>
	)
}

export default AmigosOnline
