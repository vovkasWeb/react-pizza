import { memo, useState } from 'react'
import PropTypes from 'prop-types'

const Categories = memo(({activeCategory, items, onClickCategory}) => {

	

	return (
		<div className='categories'>
			<ul>
				<li
					onClick={() => onClickCategory(null)}
					className={activeCategory === null ? 'active' : ''}
				>
					Все
				</li>
				{items ? (
					items.map((name, i) => (
						<li
							className={activeCategory === i ? 'active' : ''}
							onClick={() => onClickCategory(i)}
							key={`${name}_${i}`}
						>
							{name}
						</li>
					))
				) : (
					<h2>Loading...</h2>
				)}
			</ul>
		</div>
	)
})
Categories.propTypes = {
	// activeCategory: PropTypes.oneOf([PropTypes.number(),null]),
	items: PropTypes.arrayOf(PropTypes.string).isRequired,
	onClickCategory: PropTypes.func,
}
Categories.defaultProps = {
	activeCategory: null,
	items:[]
}

export default Categories
