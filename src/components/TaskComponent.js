// import the x - icon
import { FaTimes } from 'react-icons/fa'

const TaskComponent = ({ task, onDelete}) => {
    return (
        <div className='task'>
            <h3>
                {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer'}} onClick={onDelete}/>
            </h3>
            <p>
                {task.day}
            </p>
            
        </div>
    )
}

export default TaskComponent
