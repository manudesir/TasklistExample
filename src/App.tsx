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
    { id: 2, title: "Configurer TypeScript dans le projet", completed: false },
    { id: 3, title: "Créer un composant de liste", completed: false },
    { id: 4, title: "Refactorer le composant", completed: false },
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
    </div>
  );
};

export default App;
