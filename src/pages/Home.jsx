import { useDispatch, useSelector } from 'react-redux'
import {
	Categories,
	SortPopup,
	PizzaBlock,
	PizzaLoadingBlock,
} from '../components'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { useCallback, useEffect } from 'react'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryNames = [
	'Мясные',
	'Вегетарианская',
	'Гриль',
	'Острые',
	'Закрытые',
]
const sortItems = [
	{ name: 'популярности', type: 'popular', order: 'desc' },
	{ name: 'цене', type: 'price', order: 'desc' },
	{ name: 'алфавиту', type: 'name', order: 'ask' },
]

const Home = () => {
	const dispatch = useDispatch()

	const items = useSelector(({ pizzas }) => pizzas.items)
	const cartItems = useSelector(({ cart }) => cart.items)
	const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
	const { category, sortBy } = useSelector(({ filters }) => filters)

	useEffect(() => {
		fetchPizzas(dispatch, sortBy, category)
	}, [category, sortBy])

	const onSelectCategory = useCallback(index => {
		dispatch(setCategory(index))
	}, [])

	const onSelectType = useCallback(type => {
		dispatch(setSortBy(type))
	}, [])

	const handelAddPizzaToCart = obj => {
		dispatch(addPizzaToCart(obj))
	}

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					activeCategory={category}
					onClickCategory={onSelectCategory}
					items={categoryNames}
				/>
				<SortPopup
					activeSortType={sortBy.type}
					onClickSortType={onSelectType}
					items={sortItems}
				/>
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoaded
					? items.map(obj => (
							<PizzaBlock
								key={obj.name}
								onClickAddPizza={obj => handelAddPizzaToCart(obj)}
								addedCount={cartItems[obj.id] && cartItems[obj.id].length}
								{...obj}
							/>
					  ))
					: Array(12)
							.fill(0)
							.map((_, i) => <PizzaLoadingBlock key={i} />)}
			</div>
		</div>
	)
}

export default Home
