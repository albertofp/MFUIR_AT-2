import {
	Avatar,
	Divider,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography
} from '@mui/material'
import React from 'react'
import { faker } from '@faker-js/faker'

function Comment() {
	return (
		<>
			<ListItem alignItems='flex-start'>
				<ListItemAvatar>
					<Avatar
						alt='avatar'
						src={faker.image.avatar()}
					/>
				</ListItemAvatar>
				<ListItemText
					primary={
						<Typography
							color='primary.light'
							sx={{ fontWeight: 'bold' }}
						>
							{faker.name.fullName()}
						</Typography>
					}
					secondary={
						<>
							<Typography
								component='span'
								variant='body2'
								sx={{ display: 'inline' }}
								color='secondary'
							>
								{faker.lorem.paragraph()}
							</Typography>
						</>
					}
				/>
			</ListItem>
			<Divider />
		</>
	)
}

export default Comment
