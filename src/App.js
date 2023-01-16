import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [tasks, setTasks] = useState([
    { id: 1, name: "Buy shopping" },
    { id: 2, name: "Clean bathroom" },
    { id: 3, name: "Car's MOT" }
  ])

  const [newTask, setNewTask] = useState("")

  const handleTaskInput = (evt) => {
    setNewTask(evt.target.value)
  }

  const saveNewTask = (evt) => {
    evt.preventDefault()
    const newTaskobj = {id: Date.now(), name: newTask}
    const newToDoList = [...tasks, newTaskobj]
    setTasks(newToDoList)
    setNewTask("")
  }

  const completeTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id)
    setTasks(newTasks)
  }

  const toDoTasks = tasks.map((task) => {
    return (
      <li key={task.id}>
        {task.name}
      <button onClick={() => {completeTask(task.id)}}>Complete</button>
      </li>
    )
  })

  return (
    <div className="App">
      <h1>Todo List</h1>
      <hr></hr>
      <ul>
        {toDoTasks}
      </ul>

      <form onSubmit={saveNewTask}>
        <label htmlFor='new-task'>Task name</label>
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput}></input>
        <input type="submit" value="Save new Task"></input>
      </form>
      
    </div>
  );
}

export default App;
