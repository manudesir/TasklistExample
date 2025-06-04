// TaskInput.tsx
import React, { useState } from "react";

interface TaskInputProps {
  onSubmit: (v: string) => void;
}

const TaskInput: React.FC<TaskInputProps> = ({ onSubmit }) => {
  // État pour le champ de saisie de nouvelle tâche
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  return (
    <div style={{ marginBottom: 16 }}>
      <input
        type="text"
        placeholder="Nouvelle tâche..."
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        style={{ width: "70%", padding: 8, fontSize: 14 }}
      />
      <button
        onClick={() => {
          onSubmit(newTaskTitle);
          setNewTaskTitle("");
        }}
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
  );
};

export default TaskInput;
