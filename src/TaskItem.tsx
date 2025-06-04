// TaskItem.tsx
import React from "react";
interface TaskItemProps {
  id: number;
  title: string;
  completed: boolean;
  onCheck: (id: number) => void;
  onDelete: (id: number) => void;
}
const TaskItem: React.FC<TaskItemProps> = ({
  id,
  title,
  completed,
  onCheck,
  onDelete,
}) => {
  return (
    <li
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
        checked={completed}
        onChange={() => onCheck(id)}
        style={{ marginRight: 8 }}
      />
      <span
        style={{
          flexGrow: 1,
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {title}
      </span>
      <button
        onClick={() => onDelete(id)}
        style={{
          background: "transparent",
          border: "none",
          color: "#c00",
          cursor: "pointer",
          fontSize: 16,
        }}
        aria-label={`Supprimer ${title}`}
      >
        ✕
      </button>
    </li>
  );
};
export default TaskItem;
