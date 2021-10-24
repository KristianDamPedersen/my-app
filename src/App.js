// Importing
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'



// app
function App() {
  const [tasks, setTasks] = useState([
    {
        'id': 1,
        'text': 'Doctors appointment',
        'day': 'feb 5th at 2:30pm',
        'reminder': true,
    },
    {
        'id': 2,
        'text': 'Meeting at school',
        'day': 'feb 6th at 5:30pm',
        'reminder': true,
    },
    {
        'id': 3,
        'text': 'Food shopping',
        'day': 'feb 5th at 4:30pm',
        'reminder': false,
    },
])

// Delete task
const deleteTask = (id) => {
  console.log('delete', id)
  setTasks(tasks.filter((tasks) => tasks.id !== id))
}

// Toggle reminder
const toggleReminder = (id) => {
  console.log(id)
  setTasks(tasks.map((tasks) => tasks.id === id ? {...tasks, reminder: !tasks.reminder} : tasks))
}



    return (
    <div className="container">
      <Header />
      <AddTask />
      {/* Render the task element, or show message if tasks are empty*/}
      {tasks.length > 0
        ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : 'You´re all done! Have a nice day :)'
      }
    </div>
  );
}


export default App;
