// importing
import TaskComponent from './TaskComponent'

// Coding
const Tasks = (props) => {

    return (
        <>
            {props.tasks.map((tasks) => (<TaskComponent key={tasks.id} task={tasks} />))}
        </>
    )
}



export default Tasks
