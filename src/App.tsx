import List from "./List";
import TaskInput from "./TaskInput";
import TaskItem from "./TaskItem";
import useTasks from "./useTasks";
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
const App: React.FC = () => {
  // On initialise le hook avec un tableau de départ
  const { tasks, addTask, toggleTaskCompleted, deleteTask } = useTasks([
    { id: 1, title: "Apprendre les bases de React", completed: false },
    { id: 2, title: "Limiter le nombre de ligne par composants", completed: false },
    { id: 3, title: "Découper en compsants simples", completed: false },
    { id: 4, title: "Sortir la logique métier de la définition du composant", completed: false },
    { id: 5, title: "Eviter le props drilling", completed: false },
  ]);

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Liste de règles</h2>
      <TaskInput onSubmit={addTask} />
      <List
        items={tasks}
        renderItem={(task) => (
          <TaskItem
            id={task.id}
            title={task.title}
            completed={task.completed}
            onCheck={toggleTaskCompleted}
            onDelete={deleteTask}
          />
        )}
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
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Composition</h3>
        <p>TaskItem est injecté dans List qui peut être une liste de n'importe quoi maintenant. On a évité le props drilling mais on a surtout permis de limiter la résponsabilité de nos composants</p>
        
      </div>
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
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Règles</h3>
        <ul>
          <li><b>Séparation des composants</b> pour améliorer la clarté et respecter le principe de responsabilité unique</li>
          <li><b>Hooks personnalisés</b> pour encapsuler la logique métier, la rendre testable et réutilisable</li>
          <li><b>Composition de composants</b> pour créer des interfaces modulaires testables et réutilisables</li>
        </ul>
      </div>
    </div>
  );
};

export default App;
