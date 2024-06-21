import React from "react";
import Sidebar from "./components/Sidebar";
import TaskList from "./components/TaskList";
import TaskDetails from "./components/TaskDetails";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <TaskList />
        <TaskDetails />
      </main>
    </div>
  );
}

export default App;
