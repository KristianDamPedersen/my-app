// import the x - icon
import { FaTimes } from 'react-icons/fa'

const TaskComponent = (props) => {
    return (
        <div className='task'>
            <h3>{props.task.text} <FaTimes /></h3>
            <p>{props.task.day}</p>
            
        </div>
    )
}

export default TaskComponent
