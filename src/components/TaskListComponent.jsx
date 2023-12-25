import React from 'react';
import TaskItemComponent from './TaskItemComponent';
import '../styles/TaskListComponent.css';

function TaskListComponent({ tasks, onEditTask, onDeleteTask, onSaveEdit }) {
  
  return (
    <div className='taskListContainer'>
      <div className='taskListHeader'>
        <div>{tasks.length} tasks left</div>
        <button>Clear all tasks</button>
      </div>
      {tasks.map((task, index) => (
        <TaskItemComponent
          key={index}
          task={task}
          onEditTask={onEditTask}
          onDeleteTask={() => onDeleteTask(index)}
          onSaveEdit={(editedValue) => onSaveEdit(index, editedValue)}
        />
      ))}
    </div>
  );
}

export default TaskListComponent;
