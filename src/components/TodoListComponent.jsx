import React, { useState, useEffect} from 'react'
import AddTaskComponent from './AddTaskComponent'
import TaskListComponent from './TaskListComponent'
import HeaderComponent from './HeaderComponent'
import '../styles/TodoListComponent.css'

function TodoListComponent() {
  const [tasks, setTasks] = useState(
    JSON.parse(sessionStorage.getItem('tasks')) || []
  );

  useEffect(() => {
    const storedTasks = sessionStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  const handleTaskAdded = (newTasks) => {
    setTasks(newTasks);
  };

  const handleEdit = () => {

  }

  const handleDelete = (index) => {
    const updatedTasks = tasks.slice();
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleSaveEdit = (index, editedValue) => {
    const updatedTasks = tasks.map((task, i) =>
    i === index ? { ...task, text: editedValue } : task
    );
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));
    alert("Update task successfully")
  };

  const handleClearAll = () => {
    sessionStorage.clear()
    setTasks([])
  }

  const handleChecked = (id) => {
    const updatedTasks = tasks.map((task, i) =>
    i === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    sessionStorage.setItem('tasks', JSON.stringify(updatedTasks));

  }

  
  return (
    <div className='todoListContainer'>
      <HeaderComponent />
      <AddTaskComponent 
        isAdded={handleTaskAdded}/>
      <TaskListComponent  
        tasks={tasks} 
        onEditTask={handleEdit} 
        onDeleteTask={handleDelete} 
        onSaveEdit={handleSaveEdit}
        onClearAll={handleClearAll}
        onChecked={handleChecked}/>
    </div>
  )
}

export default TodoListComponent
