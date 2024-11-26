// Ce composant est utilisé pour afficher la liste des tâches
import { TaskItem } from "../taskItem/taskItem";
import styles from "./taskList.module.css";
import React from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

interface TaskListProps {
  tasksList: Task[];
  editTask: (id: number, completedValue: boolean) => void;
  deleteTask: (id: number) => void;
  incompletedTasks: number;
}

export const TaskList: React.FC<TaskListProps> = ({
  tasksList,
  incompletedTasks,
  editTask,
  deleteTask,
}) => {
  const taskList = tasksList.map((task) => (
    <TaskItem
      key={task.id}
      task={task}
      editTask={editTask}
      deleteTask={deleteTask}
    />
  ));

  if (taskList && taskList.length > 0) {
    return (
      <div className="box">
        <h2 className={styles.title}>
          {incompletedTasks > 0 && (
            <>
              Il te reste encore{" "}
              <span className="important">{incompletedTasks}</span> tâches a
              accomplir
            </>
          )}
          {incompletedTasks === 0 && (
            <> Génial, tu as accompli toutes tes tâches ! </>
          )}
        </h2>
        {taskList && taskList.length > 0 && (
          <ul className={styles.container}>{taskList}</ul>
        )}
      </div>
    );
  }
  return (
    <div className="box">
      <h2 className={styles.title}>
        Salut, tu n'as rien à faire ! Profite de ton temps libre !
      </h2>
    </div>
  );
};
