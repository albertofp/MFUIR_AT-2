import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Sidebar from './components/Sidebar'
import Friendsbar from './components/Friendsbar'

function App() {
	return (
		<div className='App'>
			<Grid2
				container
				bgcolor={'background.default'}
				color={'text.primary'}
				sx={{ display: 'flex' }}
			>
				<Grid2
					xs={12}
					md={12}
				>
					<Navbar />
				</Grid2>
				<Grid2
					xs={0}
					md={2}
				>
					<Sidebar />
				</Grid2>
				<Grid2
					xs={12}
					md={8}
				>
					<Feed />
				</Grid2>
				<Grid2
					xs={0}
					md={2}
				>
					<Friendsbar />
				</Grid2>
			</Grid2>
		</div>
	)
}

export default App
