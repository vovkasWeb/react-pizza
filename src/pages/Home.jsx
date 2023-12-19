import { useDispatch, useSelector } from 'react-redux'
import {Categories, SortPopup, PizzaBlock } from '../components'
import { setCategory } from '../redux/actions/filters';
import { useCallback } from 'react';


const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [{ name: 'популярности', type: 'popular' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'alphabet' },]

const Home = () => {
	const dispatch = useDispatch();
	const  items = useSelector(({ pizzas }) => pizzas.items)

	const onSelectCategory = useCallback(index => {
		dispatch(setCategory(index))
	},[])

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories onClickItem={onSelectCategory} items={categoryNames} />

				<SortPopup items={sortItems} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{items && items ? (
					items.map(obj => <PizzaBlock key={obj.name} {...obj} />)
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	)
}

export default Home
