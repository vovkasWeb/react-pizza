import { useEffect } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages'
import axios from 'axios'
import { setPizzas } from './redux/actions/pizzas'
import { Route, Routes } from 'react-router-dom'
import store from './redux/store'
import { useDispatch } from 'react-redux'

function App() {
	const dispatch = useDispatch()

	useEffect(() => {
		axios.get('http://localhost:3001/pizzas').then(({ data }) => {
			dispatch(setPizzas(data))
		})
	}, [])

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
