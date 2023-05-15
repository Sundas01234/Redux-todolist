import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/TasksSlice";

const Addtodo = () => {
	const [value, setValue] = useState('');

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();

		if (value.trim().length === 0) {
			alert("Enter a task before adding !!");
			setValue("");
			return;
		}

		dispatch(
			addTask({
				task: value
			})
		);

		setValue("");
	};

	return (
		<div class=" flex flex-col justify-center items-center">
		<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
		  <div class="mb-4">
			<label class="block text-gray-700 text-sm font-bold mb-2" for="add list">
			  Add List
			</label>
			<input type="text" className="input" value={value} onChange={(event) => setValue(event.target.value)} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
		  </div>
		  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" type="add" onClick={onSubmit}>
			Add
		  </button>
		</form>
  
	  </div>
	);
};

export default Addtodo;