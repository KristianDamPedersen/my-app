import PropTypes from 'prop-types'


const Button = ({ color, text }) => {
    return (
        <div>
            <button style={{backgroundColor: color}} className='btn'>{text}</button>
        </div>
    )
}

// define
Button.defaultProps = {
    color: 'green',
    text: 'hello text'
}
export default Button
