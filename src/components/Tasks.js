// importing
import TaskComponent from './TaskComponent'

// Coding
const Tasks = ({tasks, onDelete}) => {

    return (
        <>
            {tasks.map((tasks) => (<TaskComponent key={tasks.id} task={tasks} onDelete={onDelete} />))}
        </>
    )
}



export default Tasks
