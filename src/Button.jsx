import classNames from 'classnames'
const Button = ({ outline, children }) => {
	return (
		<button
			className={classNames('button', {
				'button--outline': outline,
			})}
		>
			{children}
		</button>
	)
}

export default Button
