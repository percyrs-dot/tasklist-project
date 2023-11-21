import AddButton from "../AddButton/AddButton";
import "./TaskList.css";
import { useState, useEffect } from "react";
export default function TaskList({ onAddTask }) {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      content: taskText,
      status: false,
    };
    setTasks([...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  };

  useEffect(() => {
    console.log("Ha cambiado la lista de tareas!");
  }, [tasks]);

  return (
    <>
      <div className="tasklist-container">
        <ol>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.status}
                onChange={() => toggleTaskStatus(task.id)}
              />
              {task.content} - {task.status ? "Completed" : "Pending"}
              <button onClick={() => removeTask(task.id)}>X</button>
            </li>
          ))}
        </ol>
      </div>
      <AddButton onAddTask={addTask} />
    </>
  );
}
