import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./toDo";
import userInputReducer from "./userInput";

//creating a store for todo list reducer
export default configureStore({
    reducer: {
        toDo: toDoReducer,
        userInput: userInputReducer,
    }, 
});
