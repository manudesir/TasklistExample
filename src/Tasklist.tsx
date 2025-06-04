// TaskList.tsx
import React from "react";
import { Task } from "./App";
import TaskItem from "./TaskItem";

interface TaskListProps {
  tasks: Task[];
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onCheck, onDelete }) => {
  if (tasks.length === 0) {
    return <p>Aucune tâche pour le moment.</p>;
  }
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          completed={task.completed}
          onCheck={onCheck}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default TaskList;
