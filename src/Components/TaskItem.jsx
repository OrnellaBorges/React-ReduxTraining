import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../slices/todoSlice";

const TaskItem = ({ task }) => {
    const dispatch = useDispatch(); // est une fonction qui me permet de parler a redux et lui transmetre une action

    const defaultStyle = {
        backgroundColor: "#f5f5f5",
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    };

    const deleteButtonStyle = {
        cursor: "pointer",
        padding: "5px",
        marginLeft: "20px",
        backgroundColor: "#ff6347",
        color: "#fff",
        borderRadius: "3px",
    };

    return (
        <div className="taskItem" style={defaultStyle}>
            <label>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => dispatch(toggleTask(task.id))}
                />
                <span style={{ marginLeft: "10px" }}>{task.text}</span>
            </label>

            <span
                onClick={() => dispatch(deleteTask(task.id))}
                role="button"
                style={deleteButtonStyle}
            >
                X
            </span>
        </div>
    );
};

export default TaskItem;
