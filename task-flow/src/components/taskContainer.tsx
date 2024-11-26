// Ce composant est utlisé pour afficher l'integralité de la fonctionnalité de tache
import { useEffect, useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/taskList";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

export const TaskContainer = () => {
  const [tasksList, setTasksList] = useState<Task[]>([]);

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasksList");
    if (storedTasks) {
      setTasksList(JSON.parse(storedTasks));
    }
  }, []);

  const saveTasksToLocalStorage = (tasks: Task[]) => {
    localStorage.setItem("tasksList", JSON.stringify(tasks));
  };

  const addTask = (title: string) => {
    const newTask: Task = {
      id: tasksList.length ? tasksList[tasksList.length - 1].id + 1 : 1,
      title: title,
      completed: false,
    };
    const updatedTasks = [...tasksList, newTask];
    setTasksList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (id: number, completedValue: boolean) => {
    const updatedTasks = tasksList.map((task) =>
      task.id === id ? { ...task, completed: completedValue } : task
    );
    setTasksList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const getTaskCount = () => {
    const completedTasks = tasksList.filter((task) => task.completed).length;
    const incompletedTasks = tasksList.length - completedTasks;
    return { completedTasks, incompletedTasks };
  };

  const { completedTasks, incompletedTasks } = getTaskCount();

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />
      <TaskList
        tasksList={tasksList}
        editTask={editTask}
        deleteTask={deleteTask}
        incompletedTasks={incompletedTasks}
      />
      <Footer completedTasks={completedTasks} />
    </main>
  );
};
