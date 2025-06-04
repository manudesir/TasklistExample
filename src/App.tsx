import TaskInput from "./TaskInput";
import TaskList from "./Tasklist";
import useTasks from "./useTasks";
export type Task = {
  id: number;
  title: string;
  completed: boolean;
};
const App: React.FC = () => {
  // les tâches peuvent être dans un state, sur un serveur, dans un localStorage, ça ne change rien au fonctionnement du composant
  const { tasks, addTask, toggleTaskCompleted, deleteTask } = useTasks([
    { id: 1, title: "Apprendre les bases de React", completed: true },
    { id: 2, title: "Limiter le nombre de ligne par composants", completed: true },
    { id: 3, title: "Découper en compsants simples", completed: true },
    { id: 4, title: "Sortir la logique métier de la définition du composant", completed: true },
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
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Sortir la logique métier</h3>
        <p>et la mettre dans un hook</p>
        <h3 style={{ marginTop: 0, marginBottom: 12 }}>Problème:</h3>
        <p>on passe les fonctions <b>toggleTaskCompleted</b> et <b>deleteTask</b> de <pre>App → TaskList → TaskItem</pre> C'est du <b>props drilling</b> (le composant intermédiaire fait passe plat).</p>
        <p><i>Ce n'est pas un gros problème en soit et il existe des manières élégantes de le faire, mais ça met en avant une amélioration du code possible</i></p>
      </div>
    </div>
  );
};

export default App;
