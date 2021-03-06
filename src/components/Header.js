import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title, onAdd, showAdd}) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button 
            color={showAdd ? 'red' : 'green'} 
            text = {showAdd ? 'X' : 'Add'} 
            onClick={onAdd}/>
        </header>
    )
}

// define defaultProps
Header.defaultProps = {
    title: 'Task Tracker', 
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
