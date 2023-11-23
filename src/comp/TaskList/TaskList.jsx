import AddButton from "../AddButton/AddButton";
import TaskItem from "../TaskItem/TaskItem";
import "./TaskList.css";
import { useState, useEffect } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  const updateLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length + 1,
      content: taskText,
      status: false,
    };
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: !task.status } : task
    );
    setTasks(updatedTasks);
    updateLocalStorage(updatedTasks);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTasks(storedTasks);
    }
    console.log("Ha cambiado la lista de tareas!");
  }, [tasks]);

  return (
    <>
      <div className="tasklist-container">
        <ol>
          {tasks.map((task) => (
              <TaskItem
              key={task.id}
              task={{
                id: task.id,
                content: task.content,
                status: task.status
              }}
              toggleTaskStatus={toggleTaskStatus}
              removeTask={removeTask}
            />
          ))}
        </ol>
      </div>
      <AddButton onAddTask={addTask} />
    </>
  );
}
