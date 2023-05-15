
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
        <div>
            <div class=" flex flex-col justify-center items-center">
                
                    {editing ? (
                        <input
                            type="text"
                            class="placeholder:italic placeholder:text-slate-400 block bg-white w-45  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                            onChange={handleTitleChange}
                        />
                    ) : (
                        <div>{title}</div>
                    )}
                    <div>
                        {editing ? (
                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-2" onClick={saveEdit}>
                                Save
                            </button>
                        ) : (
                            <>
                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={toggleEdit}>Edit</button>{' '}
                                <button class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={removeTask}>Delete</button>
                            </>
                        )}
                    </div>
                

            </div>
        </div>
    );
};

export default TodoItem;
