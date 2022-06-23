import React from "react";

export const VisibilityControl = ({
  onSetShowComplete,
  onCleanTask,
  showComplete,
}) => {
  const handleDelete = () => {
    if (window.confirm("Are you suro to delete this task?")) {
      onCleanTask();
    }
  };
  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          checked={showComplete}
          onChange={(e) => onSetShowComplete()}
        />
        <label>Show DoneTasks</label>
      </div>

      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Clear
      </button>
    </div>
  );
};
