import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faChevronRight,
  faCalendarAlt,
  faListUl,
  faSquare,
  faCalendarXmark,
} from "@fortawesome/free-solid-svg-icons";

const TaskList = () => {
  return (
    <div className="task-list">
      <header>
        <h1>Today</h1>
        <span>5</span>
      </header>
      <div className="add-task">
        <FontAwesomeIcon icon={faPlus} style={{ color: "black" }} />
        <span>Add New Task</span>
      </div>
      <ul>
        <li className="task-item">
          <div className="task-item-content">
            <input type="checkbox" />
            <span>Research content ideas</span>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "black" }} />
          </div>
        </li>
        <li className="task-item">
          <div className="task-item-content">
            <input type="checkbox" />
            <span>Create a database of guest authors</span>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "black" }} />
          </div>
        </li>
        <li className="task-item">
          <div className="task-item-content">
            <input type="checkbox" />
            <span>Renew driver's license</span>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "black" }} />
          </div>
          <div className="task-item-details">
            <div className="task-date">
              <FontAwesomeIcon
                icon={faCalendarXmark}
                style={{ color: "black" }}
              />
              <input type="date" />
            </div>
            <div className="task-subtasks">
              <button>1</button>
              <span>Subtasks</span>
            </div>
            <div className="task-list1">
              <FontAwesomeIcon icon={faSquare} style={{ color: "#FC696D" }} />
              <select>
                <option>Personal</option>
              </select>
            </div>
          </div>
        </li>
        <li className="task-item">
          <div className="task-item-content">
            <input type="checkbox" />
            <span>Consult accountant</span>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "black" }} />
          </div>
          <div className="task-item-details">
            <div className="task-list2">
              <FontAwesomeIcon icon={faSquare} style={{ color: "#FFD341" }} />
              <span>List</span>
            </div>
            <div className="task-subtasks1">
              <button>3</button>
              <span>Subtasks</span>
            </div>
          </div>
        </li>
        <li className="task-item">
          <div className="task-item-content">
            <input type="checkbox" />
            <span>Print business card</span>
            <FontAwesomeIcon icon={faChevronRight} style={{ color: "black" }} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default TaskList;
