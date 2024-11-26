// ce composant sera utilisé pour le champ de saisie de nos tâches
import { useState } from "react";
import styles from "./taskInput.module.css";

interface TaskInputProps {
  addTask: (title: string) => void;
}

export const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle);
      setTaskTitle("");
    }
  };

  return (
    <div className={`box ${styles.element}`}>
      <h2 className={styles.title}> Ajoute ta prochaine tâche </h2>
      <form action="" className={styles.container} onSubmit={handleAddTask}>
        <input
          type="text"
          className={styles.input}
          placeholder="Indiquez un titre de tâche explicite."
          onChange={handleInputChange}
          value={taskTitle}
        />
        <button className="button-primary" type="submit">
          Ajouter
        </button>
      </form>
    </div>
  );
};
