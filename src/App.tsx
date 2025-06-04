import { useState } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./Tasklist";
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
const App: React.FC = () => {
  // État pour la liste des tâches
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Apprendre les bases de React", completed: true },
    { id: 2, title: "Configurer TypeScript dans le projet", completed: false },
    { id: 3, title: "Créer un composant de liste", completed: false },
    { id: 4, title: "Refactorer le composant", completed: false },
  ]);

  // Fonction pour ajouter une nouvelle tâche
  const addTask = (newTaskTitle: string) => {
    if (newTaskTitle.trim() === "") return;
    const nextId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask: Task = {
      id: nextId,
      title: newTaskTitle.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
  };

  // Fonction pour basculer l'état "completed" d'une tâche
  const toggleTaskCompleted = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Fonction pour supprimer une tâche
  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Ma liste de tâches</h2>
      <TaskInput onSubmit={addTask} />

      <TaskList
        tasks={tasks}
        onCheck={toggleTaskCompleted}
        onDelete={deleteTask}
      />
    </div>
  );
};

export default App;
