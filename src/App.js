import { useEffect, useState } from 'react'
import { Header } from './components'
import { Home, Cart } from './pages'

import { Route, Routes } from 'react-router-dom'

function App() {
	const [pizzas, setPizzas] = useState([])
	useEffect(() => {
		fetch('/db.json')
			.then(res => res.json())
			.then(json => setPizzas(json.pizzas))
			.catch(e => console.error(e))
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
