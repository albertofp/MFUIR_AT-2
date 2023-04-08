import { MoreVert, Share } from '@mui/icons-material'
import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	IconButton,
	Typography
} from '@mui/material'
import React from 'react'

function Post() {
	return (
		<Card sx={{ margin: 4 }}>
			<CardHeader
				avatar={
					<Avatar
						sx={{ cursor: 'pointer' }}
						src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.chesscomfiles.com%2Fuploads%2Fv1%2Fimages_users%2Ftiny_mce%2FPeterDoggers%2FphpwTLwtA.jpeg&f=1&nofb=1&ipt=e37d6a633d06668abe6562cc07fd2abbbcd9db2933d22f8f657d9403ad5d66a1&ipo=images'
					></Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVert />
					</IconButton>
				}
				title='Magnus Carlssen'
				subheader='4 de Janeiro de 2023'
			/>
			<CardMedia
				sx={{ cursor: 'pointer' }}
				component='img'
				height='20%'
				alt='post img'
				image='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.s2s2eHdYaHlQQgUYCI3HywHaE6%26pid%3DApi&f=1&ipt=6a394bed91e89a388b3ca4fd054bf80ef07443ec2ec264e422f82695d1ada78f&ipo=images'
			/>
			<CardContent>
				<Typography
					variant='body2'
					color='text.secondary'
				>
					4 reasons why chess isn’t cricket: Cricket is played on a field with
					humans, chess is played on a board with wooden pieces. Cricket has a
					bat and a ball, chess usually doesn’t. There are 22 players needed for
					a cricket match, while chess is only two. I can’t play cricket.
				</Typography>
			</CardContent>
			<CardActions>
				<IconButton>
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default Post
