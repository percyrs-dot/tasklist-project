import { useState } from "react";
import "./TaskForm.css";

export default function TaskForm({ onClose, onAddTask }) {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== "") {
      // Llama a la función onAddTask para enviar la nueva tarea a la lista principal
      onAddTask(taskText);
      // Reinicia el estado del input a una cadena vacía después de agregar la tarea
      setTaskText("");
      onClose();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="task-form-container">
      <form onSubmit={handleSubmit}>
        <label>
          Nueva tarea:
          <input
            type="text"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
        </label>
        <div className="form-buttons">
          <button className="form-button" type="submit">
            Agregar
          </button>
          <button className="form-button" type="button" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
