// importing
import TaskComponent from './TaskComponent'

// Coding
const Tasks = ({tasks, onDelete, onToggle}) => {

    return (
        <>
            {tasks.map((tasks) => (<TaskComponent key={tasks.id} 
            task={tasks} 
            onDelete={onDelete} 
            onToggle={onToggle}
            />))}
        </>
    )
}



export default Tasks
