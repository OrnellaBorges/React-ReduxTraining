import { useState } from "react";
import { useSelector } from "react-redux"; // Hook pour appeler le magasin
import "./style.css";
import TaskForm from "./Components/TaskForm";
import TasksHeader from "./Components/TasksHeader";
import TasksList from "./Components/TasksList";

export default function App() {
    // stockage de la liste des taches via redux
    const tasks = useSelector((state) => state.todo);
    return (
        <div id="app-container" className="container">
            <article className="App">
                <TasksHeader tasks={tasks} />
                <TasksList tasks={tasks} />
                <footer>
                    <TaskForm /* addTask={addTask} */ />
                </footer>
            </article>
        </div>
    );
}
