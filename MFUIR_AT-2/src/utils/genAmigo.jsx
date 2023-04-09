import {
	ListItem,
	Avatar,
	ListItemAvatar,
	Typography,
	Divider,
	ListItemText
} from '@mui/material'
import { faker } from '@faker-js/faker'
import getRandomInt from './getRandomInt'

export default function genAmigo(msg) {
	let chain = []
	for (let i = 0; i < 4; i++) {
		chain.push(
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
							<Typography sx={{ fontWeight: 'bold' }}>
								{faker.name.fullName()}
							</Typography>
						}
						secondary={
							<>
								<Typography
									component='span'
									variant='body2'
									sx={{ display: 'inline' }}
									color='textPrimary'
								>
									{getRandomInt(1, 20)}{' '+ msg}
								</Typography>
							</>
						}
					/>
				</ListItem>
				<Divider />
			</>
		)
	}
	return <>{chain}</>
}
