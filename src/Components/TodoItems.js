// TodoItem.js
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { deleteTask, editTask } from "../Redux/TasksSlice";

const TodoItem = ({ id, title }) => {
    const [editing, setEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(title);
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(deleteTask({ id }));
    };

    const toggleEdit = () => {
        setEditing(!editing);
    };

    const saveEdit = () => {
        if (newTitle.trim().length === 0) {
            return;
        }
        dispatch(editTask({ id, title: newTitle }));
        setEditing(false);
    };

    const handleTitleChange = (event) => {
        setNewTitle(event.target.value);
    };

    return (
        <li className="task-item">
            {editing ? (
                <input
                    type="text"
                    value={newTitle}
                    onChange={handleTitleChange}
                />
            ) : (
                <div>{title}</div>
            )}
            <div>
                {editing ? (
                    <button className="save-task-button" onClick={saveEdit}>
                        Save
                    </button>
                ) : (
                    <>
                        <button className="edit-task-button" onClick={toggleEdit}>
                            Edit
                        </button>
                        <button className="remove-task-button" onClick={removeTask}>
                            Delete
                        </button>
                    </>
                )}
            </div>
        </li>
    );
};

export default TodoItem;
