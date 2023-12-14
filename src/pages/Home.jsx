import { Header, Categories, SortPopup, PizzaBlock } from '../components'
const Home = ({ pizzas }) => {
	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					onClickItem={name => console.log(name)}
					items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
				/>

				<SortPopup items={['популярности', 'цене', 'алфавиту']} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{pizzas ? (
					pizzas.map(obj => <PizzaBlock key={obj.name} {...obj} />)
				) : (
					<h2>Loading...</h2>
				)}
			</div>
		</div>
	)
}

export default Home
