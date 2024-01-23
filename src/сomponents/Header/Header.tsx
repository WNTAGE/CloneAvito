import { Outlet } from 'react-router-dom'
import Container from '../Container/Container'

const Header = () => {
	return (
		<>
			<Container>
				<div>avitoClone</div>
			</Container>
			<Outlet />
		</>
	)
}

export default Header
