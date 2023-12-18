import { useEffect} from 'react'
import { Header } from './components'
import { Home, Cart } from './pages'
import axios from 'axios'
import { setPizzas as setPizzasAction } from './redux/actions/pizzas'

import { Route, Routes } from 'react-router-dom'
import store from './redux/store'
import { connect } from 'react-redux'

function App({ items, setPizzas }) {
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
					<Route path='/' element={<Home pizzas={items} />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</div>
		</div>
	)
}

const mapStateToProps = state => {
	return {
		items: state.pizzas.items,
	}
}
const mapDispatchToProps = dispatch => {
	return {
		setPizzas: items => dispatch(setPizzasAction(items)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
