import { useEffect, useState } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages'
import axios from 'axios'


import { Route, Routes } from 'react-router-dom'

function App() {
	const [pizzas, setPizzas] = useState([])
	useEffect(() => {
		axios.get('/db.json').then(({ data }) => {
			setPizzas(data.pizzas)
		})
	
	}, [])

	return (
		<div className='wrapper'>
			<Header />

			<div className='content'>
				<Routes>
					<Route path='/' element={<Home pizzas={pizzas} />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
