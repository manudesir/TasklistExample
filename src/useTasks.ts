// useTasks.ts
import { useState } from "react";
import { Task } from "./App";

// hook contenant la logique métier pour gérer les tâches
const useTasks = (initialTasks: Task[]) => {
  // liste de tâches
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  // ajouter une tâche
  const addTask = (title: string) => {
    if (title.trim() === "") return;
    const nextId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask: Task = {
      id: nextId,
      title: title.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // marquer une tâche comme complétée ou non
  const toggleTaskCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // supprimer une tâche
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return { tasks, addTask, toggleTaskCompleted, deleteTask };
};

export default useTasks;
