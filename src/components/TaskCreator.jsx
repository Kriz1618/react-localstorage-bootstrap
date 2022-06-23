import { useState } from "react";

export const TaskCreator = ({ onCreateTask }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreateTask(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="my-2 row">
      <div className="col-9">
        <input
          type="text"
          value={task}
          placeholder="Enter a new task"
          onChange={(e) => setTask(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="col-3">
        <button className="btn btn-primary btn-sm"> Save Task</button>
      </div>
    </form>
  );
};
