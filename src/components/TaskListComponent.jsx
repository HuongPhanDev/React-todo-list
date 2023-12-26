import React from 'react'
import TaskItemComponent from './TaskItemComponent'
import '../styles/TaskListComponent.css'

function TaskListComponent({ tasks, onEditTask, onDeleteTask, onSaveEdit, onClearAll, onChecked}) {
  const completedTasks = tasks.filter(task => task.completed).length;
  const remainingTasks = tasks.length - completedTasks;
  return (
    <div className='taskListContainer'>
      <div className='taskListHeader'>
        <div>{remainingTasks} tasks left</div>
        <button onClick={onClearAll}>Clear all tasks</button>
      </div>
      {tasks.map((task, index) => (
        <TaskItemComponent
          key={index}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={() => onDeleteTask(index)}
          onSaveEdit={(editedValue) => onSaveEdit(index, editedValue)}
          onChecked={() => onChecked(index)}
          
        />
      ))}
    </div>
  );
}

export default TaskListComponent
