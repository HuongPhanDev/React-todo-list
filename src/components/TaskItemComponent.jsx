import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaCheck, FaTimes } from 'react-icons/fa';
import '../styles/TaskItemComponent.css';

function TaskItemComponent({ task, onEditTask, onDeleteTask, onSaveEdit }) {
  const [editMode, setEditMode] = useState(false);
  const [editedValue, setEditedValue] = useState(task);
  const handleEdit = () => {
    setEditMode(true);
  };

  const handleSave = () => {
    onSaveEdit(editedValue);
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  const handleChange = (e) => {
    setEditedValue(e.target.value);
  };

  const handleDelete = () => {
    onDeleteTask();
  };

  const handleOnClick = () => {
    
  }

  return (
    <div className='taskItemContainer'>
      <input type="checkbox" name="taskItem" id="taskItem" onClick={handleOnClick}/>
      {editMode ? (
        <>
          <input
            type="text"
            value={editedValue}
            onChange={handleChange}
            autoFocus
          />
          <span className='taskIcons'>
            <FaCheck onClick={handleSave} className="checkIcon" />
            <FaTimes onClick={handleCancel} className="cancelIcon" />
          </span>
        </>
      ) : (
        <>
          <label htmlFor="taskItem" className={task.completed ? 'completed' : ''}>
            {task}
          </label>
          <span className="taskIcons">
            <FaEdit onClick={handleEdit} className="editIcon" />
            <FaTrashAlt onClick={handleDelete} className='deleteIcon' />
          </span>
        </>
      )}
    </div>
  );
}

export default TaskItemComponent;
