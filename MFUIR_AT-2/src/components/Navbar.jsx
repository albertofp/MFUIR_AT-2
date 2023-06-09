import { Mail, Notifications } from '@mui/icons-material'
import BlurCircularRoundedIcon from '@mui/icons-material/BlurCircularRounded'
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	styled,
	Toolbar,
	Typography
} from '@mui/material'
import React, { useState } from 'react'
import { faker } from '@faker-js/faker'
import getRandomInt from '../utils/getRandomInt'

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between'
})

const Search = styled('div')(({ theme }) => ({
	backgroundColor: theme.palette.primary.main,
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '35%'
}))

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	alignItems: 'center',
	gap: '20px',
	[theme.breakpoints.up('sm')]: {
		display: 'flex'
	}
}))

const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: '10px',
	[theme.breakpoints.up('sm')]: {
		display: 'none'
	}
}))
const Navbar = () => {
	const [open, setOpen] = useState(false)
	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography
					variant='h6'
					sx={{ display: { xs: 'none', sm: 'block' } }}
					color='primary.light'
				>
					REDE SOCIAL
				</Typography>
				<BlurCircularRoundedIcon
					sx={{ display: { xs: 'block', sm: 'none', cursor: 'pointer' } }}
				/>
				<Search>
					<InputBase placeholder='pesquisar...' />
				</Search>
				<Icons>
					<Badge
						sx={{ cursor: 'pointer' }}
						badgeContent={getRandomInt(1, 10)}
						color='error'
					>
						<Notifications color='primary.light' />
					</Badge>
					<Badge
						sx={{ cursor: 'pointer' }}
						badgeContent={getRandomInt(1, 10)}
						color='error'
					>
						<Mail color='primary.light' />
					</Badge>

					<Avatar
						src={faker.image.avatar()}
						sx={{ width: 30, height: 30, cursor: 'pointer' }}
						onClick={(e) => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={(e) => setOpen(true)}>
					<Avatar sx={{ width: 30, height: 30, cursor: 'pointer' }} />
					<Typography variant='span'>{faker.name.firstName()}</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				open={open}
				onClose={(e) => setOpen(false)}
				anchorOrigin={{
					//Fixa o menu no topo direito da tela, abaixo da navbar
					vertical: 'top',
					horizontal: 'right'
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right'
				}}
			>
				<MenuItem>Perfil</MenuItem>
				<MenuItem>Minha conta</MenuItem>
				<MenuItem>Sair</MenuItem>
			</Menu>
		</AppBar>
	)
}

export default Navbar
