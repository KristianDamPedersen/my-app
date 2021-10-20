import PropTypes from 'prop-types'


const Button = ({ color, text }) => {
    const onClick = () => {
        console.log('Clicked!')
    }
    
    return (
        <div>
            <button onClick={onClick} style={{backgroundColor: color}} className='btn'>{text}</button>
        </div>
    )
}

// define
Button.defaultProps = {
    color: 'green',
    text: 'hello text'
}
export default Button
