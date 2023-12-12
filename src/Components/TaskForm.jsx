import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../slices/todoSlice";

const TaskForm = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Utilisez dispatch pour mettre à jour le state géré par Redux Toolkit
        dispatch(addTask(text));

        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="taskForm">
            <input
                type="text"
                placeholder="Ajouter une tâche"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
        </form>
    );
};

export default TaskForm;
