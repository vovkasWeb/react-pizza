// import styles from './Categories.module.css'

import { memo, useState } from 'react'

const Categories = memo(({ items, onClickItem }) => {
	const [activeItem, setActiveItem] = useState(null)

	const onSelectItem = index => {
		setActiveItem(index)
		onClickItem(index)
	}

	return (
		<div className='categories'>
			<ul>
				<li
					onClick={() => onSelectItem(null)}
					className={activeItem === null ? 'active' : ''}
				>
					Все
				</li>
				{items ? (
					items.map((name, i) => (
						<li
							className={activeItem === i ? 'active' : ''}
							onClick={() => onSelectItem(i)}
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
export default Categories
