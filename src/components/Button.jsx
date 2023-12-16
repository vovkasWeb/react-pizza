import PropTypes from 'prop-types'
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
Button.propTypes = {
	onClick: PropTypes.func,
}

export default Button
