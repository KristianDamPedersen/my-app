import PropTypes from 'prop-types'

const Tasks = (props) => {

    return (
        <>
            {props.tasks.map((tasks) => (<h3 key={tasks.id}>{tasks.text}</h3>))}
        </>
    )
}


// Define defaultProps
Tasks.defaultProps = {

}

// Define propTypes
Tasks.propTypes = {

}



export default Tasks
