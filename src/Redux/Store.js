import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./TasksSlice"

export default configureStore({
    reducer:{
        tasks: taskReducer,
    }
});