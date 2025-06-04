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
    { id: 2, title: "Limiter le nombre de ligne par composants", completed: false },
    { id: 3, title: "Découper en compsants simples", completed: false },
    { id: 4, title: "Sortir la logique métier de la définition du composant", completed: false },
    { id: 4, title: "Eviter le props drilling", completed: false },
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

      {/* présentation : slide-style card */}
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: 8,
          padding: 16,
          marginTop: 32,
          background: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Découpage en sous composants</h3>
        <ul>
          <li>TaskInput : pour saisir une nouvelle tâche</li>
          <li>TaskList : pour afficher la liste des tâches</li>
          <li>TaskItem : pour chaque élément de la liste</li>
        </ul>
      </div>
      
    </div>
  );
};

export default App;
