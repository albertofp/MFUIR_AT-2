import { MoreVert, Share, ThumbUpSharp } from '@mui/icons-material'
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Badge,
	Typography,
	List
} from '@mui/material'
import React from 'react'
import Comment from './Comment'
import { faker } from '@faker-js/faker'
import getRandomInt from '../utils/getRandomInt'

//Gera um numero aleatório de comentários entre min e max
function genComments(min, max) {
	const qtdComments = getRandomInt(min, max)
	const comment = <Comment />
	let chain = []
	for (let i = 0; i < qtdComments; i++) {
		chain.push(comment)
	}
	console.log(chain.length)
	return <>{chain}</>
}

function Post() {
	return (
			<Card sx={{ margin: 4 }}>
				<CardHeader
					avatar={
						<Avatar
							sx={{ cursor: 'pointer' }}
							src={faker.image.avatar()}
						></Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVert />
						</IconButton>
					}
					title={faker.name.fullName()}
					subheader={faker.date.recent().toDateString()}
				/>
				<CardMedia
					sx={{ cursor: 'pointer' }}
					component='img'
					height='20%'
					alt='post img'
					image={faker.image.image()}
				/>
				<CardContent>
					<Typography
						variant='body2'
						color='primary'
					>
						{faker.lorem.paragraph()}
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton>
						<Badge
							sx={{ cursor: 'pointer' }}
							badgeContent={getRandomInt(0, 100)}
							color='secondary'
						>
							<ThumbUpSharp color='primary' />
						</Badge>
					</IconButton>

					<IconButton>
						<Badge
							sx={{ cursor: 'pointer' }}
							badgeContent={getRandomInt(0, 100)}
							color='secondary'
						>
							<Share color='primary' />
						</Badge>
					</IconButton>
				</CardActions>
				<List sx={{ width: '100%' }}>{genComments(1, 5)}</List>
			</Card>
	)
}

export default Post
