import React from "react";

export const TaskRow = ({ task, onToggleTask }) => {
  return (
    <tr>
      <td className="d-flex justify-content-between">
        {task.name}
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => onToggleTask(task)}
        />
      </td>
    </tr>
  );
};
