import { Box, Divider, Stack } from '@mui/material'
import React from 'react'
import AmigosOnline from './AmigosOnline'
import Amigos from './Amigos'
import SugestaoAmigos from './SugestaoAmigos'

const Friendsbar = () => {
	return (
		<>
			<Box>
				<Stack
					direction='column'
					spacing={6}
					divider={<Divider />}
				>
					<AmigosOnline />

					<Amigos />

					<SugestaoAmigos />
				</Stack>
			</Box>
		</>
	)
}

export default Friendsbar
