import { AccountBox, Home, Person, Storefront } from '@mui/icons-material'
import {
	Box,
	List,
	ListItemButton,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@mui/material'
import React from 'react'

function Sidebar() {
	return (
		<Box
			flex={1}
			p={2}
			sx={{ display: 'block' }}
		>
			<Box position='fixed'>
				<List>
					<ListItem disablePadding>
						<ListItemButton
							component='a'
							href='#home'
						>
							<ListItemIcon>
								<Home color='primary.light' />
							</ListItemIcon>
							<ListItemText
								primary='Página Inicial'
								color='primary.light'
							/>
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton
							component='a'
							href='#friends'
						>
							<ListItemIcon>
								<Person color='primary.light' />
							</ListItemIcon>
							<ListItemText primary='Amigos' />
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton
							component='a'
							href='#profile'
						>
							<ListItemIcon>
								<AccountBox color='primary.light' />
							</ListItemIcon>
							<ListItemText primary='Perfil' />
						</ListItemButton>
					</ListItem>

					<ListItem disablePadding>
						<ListItemButton
							component='a'
							href='#marketplace'
						>
							<ListItemIcon>
								<Storefront color='primary.light' />
							</ListItemIcon>
							<ListItemText primary='Compras & Vendas' />
						</ListItemButton>
					</ListItem>
				</List>
			</Box>
		</Box>
	)
}

export default Sidebar
