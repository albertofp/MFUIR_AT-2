import React from 'react'

function SugestaoAmigos() {
  return (
		<Box
			position='fixed'
			width={250}
		>
			<Typography
				variant='h6'
				fontWeight={150}
				textAlign='center'
			>
				Amigos
			</Typography>
			{genAmigo()}
		</Box>
	)
}

export default SugestaoAmigos