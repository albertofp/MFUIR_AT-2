import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'

function Feed() {
	return (
		<Box
			flex={4}
			p={{ xd: 0, md: 1 }}
		>
			<Post />
			<Post />
			<Post />
			<Post />
		</Box>
	)
}

export default Feed
