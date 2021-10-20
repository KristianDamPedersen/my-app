// Importing
import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'



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
    return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}


export default App;
