import classNames from 'classnames'
const Button = ({ outline, children, onClick, className }) => {
	return (
		<button
			className={classNames('button', className, {
				'button--outline': outline,
			})}
			onClick={onClick}
		>
			{children}
		</button>
	)
}

export default Button
