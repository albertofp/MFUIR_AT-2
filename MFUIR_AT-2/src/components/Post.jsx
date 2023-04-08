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
import { theme } from '../theme'
import Comment from './Comment'
import { faker } from '@faker-js/faker'

function Post() {
	return (
		<>
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
						color='text.secondary'
					>
						{faker.lorem.paragraphs()}
					</Typography>
				</CardContent>
				<CardActions>
					<IconButton>
						<Badge
							sx={{ cursor: 'pointer' }}
							badgeContent={29}
							color='secondary'
						>
							<ThumbUpSharp />
						</Badge>
					</IconButton>

					<IconButton>
						<Badge
							sx={{ cursor: 'pointer' }}
							badgeContent={3}
							color='secondary'
						>
							<Share />
						</Badge>
					</IconButton>
				</CardActions>
				<List sx={{ width: '100%', backgroundColor: 'otherColor' }}>
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</List>
			</Card>
		</>
	)
}

export default Post
