// Ce composant est utilisé pour afficher le champ de saisie de tâches accomplies
import styles from "./footer.module.css";

interface TaskFooterProps {
  completedTasks: number;
}

export const Footer: React.FC<TaskFooterProps> = ({ completedTasks }) => {
  if (completedTasks) {
    return (
      <footer>
        <code className={styles.code}>
          Avec TaskFlow tu as éliminé {completedTasks} tâche
          {completedTasks > 1 ? "s" : ""} !
        </code>
      </footer>
    );
  }

  return null;
};
