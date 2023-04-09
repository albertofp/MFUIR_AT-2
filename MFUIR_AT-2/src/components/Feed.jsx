import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'


//Poderia ser alterado para exibir qtd aleatória de posts, ou receber posts como prop de um API etc
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
