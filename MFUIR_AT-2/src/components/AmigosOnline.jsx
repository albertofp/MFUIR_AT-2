import React from 'react'
import getRandomInt from '../utils/getRandomInt'
import { faker } from '@faker-js/faker'
import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'

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
	console.log(chain.length)
	return <>{chain}</>
}

function AmigosOnline() {
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
				Amigos Online
			</Typography>
			<AvatarGroup max={5}>{genFriends(3, 7)}</AvatarGroup>
		</Box>
	)
}

export default AmigosOnline
