import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

const TaskList: React.FC = () => {
  // État pour la liste des tâches
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, title: "Apprendre les bases de React", completed: true },
    { id: 2, title: "Limiter le nombre de ligne par composants", completed: false },
    { id: 3, title: "Découper en compsants simples", completed: false },
    { id: 4, title: "Sortir la logique métier de la définition du composant", completed: false },
    { id: 5, title: "Eviter le props drilling", completed: false },
  ]);

  // État pour le champ de saisie de nouvelle tâche
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");

  // Fonction pour ajouter une nouvelle tâche
  const addTask = () => {
    if (newTaskTitle.trim() === "") return;
    const nextId =
      tasks.length > 0 ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;
    const newTask: Task = {
      id: nextId,
      title: newTaskTitle.trim(),
      completed: false,
    };
    setTasks([newTask, ...tasks]);
    setNewTaskTitle("");
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

  // Fonction de gestion de la saisie dans l’input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskTitle(e.target.value);
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

      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="Nouvelle tâche..."
          value={newTaskTitle}
          onChange={handleInputChange}
          style={{ width: "70%", padding: 8, fontSize: 14 }}
        />
        <button
          onClick={addTask}
          style={{
            marginLeft: 8,
            padding: "8px 12px",
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          Ajouter
        </button>
      </div>

      {tasks.length === 0 ? (
        <p>Aucune tâche pour le moment.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task) => (
            <li
              key={task.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 8,
                background: "#f9f9f9",
                padding: 8,
                borderRadius: 4,
              }}
            >
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTaskCompleted(task.id)}
                style={{ marginRight: 8 }}
              />
              <span
                style={{
                  flexGrow: 1,
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                {task.title}
              </span>
              <button
                onClick={() => deleteTask(task.id)}
                style={{
                  background: "transparent",
                  border: "none",
                  color: "#c00",
                  cursor: "pointer",
                  fontSize: 16,
                }}
                aria-label={`Supprimer ${task.title}`}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

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
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Do: Keep it simple</h3>
        <p>Gardez vos composants courts et ciblés (un composant = une seule responsabilité)</p>
        <p>Ce projet React, vous allez le maintenir et le faire évoluer : le code que vous écrivez aujourd’hui sera peut-être encore là dans six mois ou un an.<br /> Si vous démarrez avec un composant monolithique, vous allez vous traîner votre code de débutant longtemps.</p>
        <h3 style={{ marginTop: 12, marginBottom: 12 }}>Don't: make big components</h3>
        <p>Ne surchargez pas un composant, n’écrivez pas toutes vos fonctions à l’intérieur du corps d’un même composant.</p>
      </div>
    </div>
  );
};

export default TaskList;
