import { useState } from "react";
import TaskForm from "../TaskForm/TaskForm";
import "./AddButton.css";

export default function AddButton({ onAddTask }) {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = () => setIsFormVisible(true);
  const hideForm = () => setIsFormVisible(false);

  return (
    <div className="add-button-container">
      {!isFormVisible ? (
        <button className="add-button" onClick={showForm}>
          +
        </button>
      ) : (
        <TaskForm onAddTask={onAddTask} onClose={hideForm} />
      )}
    </div>
  );
}
