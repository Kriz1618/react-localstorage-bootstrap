import React from "react";

import { TaskRow } from "./TaskRow";

export const TaskTable = ({ tasks, onToggleTask, doneValue = false }) => {
  const taskTableRows = () => {
    return tasks
      .filter((task) => task.done === doneValue)
      .map((task) => (
        <TaskRow task={task} key={task.name} onToggleTask={onToggleTask} />
      ));
  };

  return (
    <table className="table table-dark table-striped table-bordered border-seconday">
      <thead>
        <tr className="table-primary">
          <th>Tasks</th>
        </tr>
      </thead>
      <tbody>{taskTableRows()}</tbody>
    </table>
  );
};
