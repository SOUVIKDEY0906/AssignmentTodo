import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const TaskDetails = () => {
  return (
    <div className="task-details">
      <h2>Task:</h2>
      <div className="task-name">Renew driver's license</div>
      <textarea placeholder="Description"></textarea>
      <div className="details">
        <div className="detail-item">
          <label>List</label>
          <select>
            <option>Personal</option>
            <option>Work</option>
          </select>
        </div>
        <div className="detail-item">
          <label>Due date</label>
          <input type="date" />
        </div>
        <div className="detail-item">
          <label>Tags</label>
          <button className="tag">Tag 1</button>
          <button className="add-tag">+ Add Tag</button>
        </div>
      </div>
      <h3>Subtasks:</h3>
      <div className="subtasks">
        <div className="add-subtask">
          <FontAwesomeIcon icon={faPlus} />
          <span>Add New Subtask</span>
        </div>
        <ul>
          <li>
            <input type="checkbox" />
            <span>Subtask</span>
          </li>
        </ul>
      </div>
      <div className="actions">
        <button className="delete-task">Delete Task</button>
        <button className="save-changes">Save changes</button>
      </div>
    </div>
  );
};

export default TaskDetails;
