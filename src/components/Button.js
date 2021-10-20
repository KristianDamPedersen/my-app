import PropTypes from 'prop-types'


const Button = ({ color, text, onClick }) => {
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}} className='btn'>
                {text}
            </button>
        </div>
    )
}

// define
Button.defaultProps = {
    color: 'pink',
    text: 'missing text',
    onClick: console.log('does nothing')
}

// define propTypes
Button.propTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
