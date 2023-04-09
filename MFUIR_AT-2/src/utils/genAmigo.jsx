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

//Gera 10 amigos aleatórios, poderia ser modificado para receber um numero qualquer como prop
//A flag 'sugestao' controla se a deve ser exibido o nome de um amigo em comum
export default function genAmigo(msg, sugestao = false) {
	let chain = []
	for (let i = 0; i < 10; i++) {
		chain.push(
			<>
				<ListItem alignItems='flex-start' key={faker.datatype.uuid()}>
					<ListItemAvatar>
						<Avatar
							alt='avatar'
							src={faker.image.avatar()}
						/>
					</ListItemAvatar>
					<ListItemText
						primary={
							<Typography
								sx={{ fontWeight: 'bold' }}
								color='primary.light'
							>
								{faker.name.fullName()}
							</Typography>
						}
						secondary={
							<Typography
								component='span'
								variant='body2'
								sx={{ display: 'inline' }}
								color='primary'
							>
								{getRandomInt(1, 20)}
								{' ' + msg}
								{sugestao ? ' ' + faker.name.fullName() : ''}
							</Typography>
						}
					/>
				</ListItem>
				<Divider />
			</>
		)
	}
	return [<>{chain}</>]
}
