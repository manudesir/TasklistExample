import TaskInput from "./TaskInput";
import TaskList from "./Tasklist";
import useTasks from "./useTasks";
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
const App: React.FC = () => {
  // On initialise le hook avec un tableau de départ
  const { tasks, addTask, toggleTaskCompleted, deleteTask } = useTasks([
    { id: 1, title: "Apprendre les bases de React", completed: true },
    { id: 2, title: "Limiter le nombre de ligne par composants", completed: false },
    { id: 3, title: "Découper en compsants simples", completed: false },
    { id: 4, title: "Sortir la logique métier de la définition du composant", completed: false },
    { id: 4, title: "Eviter le props drilling", completed: false },
  ]);

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
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Next step:</h3>
        <p>Sortir la logique métier du composant App</p>
      </div>
    </div>
  );
};

export default App;
