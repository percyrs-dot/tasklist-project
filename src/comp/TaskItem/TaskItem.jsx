import React from 'react';
import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleCheck, faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default function TaskItem({ task, toggleTaskStatus, removeTask }) {
  return (
    <li key={task.id} className={task.status ? "completed-task" : "pending-task"}>
            <button 
                className='status-button'
                onClick={() => toggleTaskStatus(task.id)}>
                    {task.status ? <FontAwesomeIcon icon={faCircleCheck}/> 
                    : 
                    <FontAwesomeIcon icon={faCircle} />}
            </button>
            <p>
                {task.content}
            </p>
            <button
                className='remove-button' 
                onClick={() => removeTask(task.id)}>
                    <FontAwesomeIcon icon={faTrashCan} />
            </button>
        </li>
  )
}
