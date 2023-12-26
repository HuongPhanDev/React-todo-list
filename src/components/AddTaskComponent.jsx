import React, { useState } from 'react'
import '../styles/AddTaskComponent.css'


function AddTaskComponent({ isAdded }) {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = e => {
    setInputValue(e.target.value || '')
  }

  const handleAddTask = () => {
    let tasks = JSON.parse(sessionStorage.getItem('tasks')) || []
    const newTask = { text: inputValue, completed: false }
    tasks.push(newTask)
    sessionStorage.setItem('tasks', JSON.stringify(tasks))
    isAdded(tasks)
    setInputValue("")
    alert("Add task successfully")
  }

  return (
    <div className="addTask">
      <span className="addIcon">
        +
      </span>
      <input
        className="inputTask"
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="btnTask" onClick={handleAddTask}>
        ADD
      </button>
    </div>
  )
}

export default AddTaskComponent
