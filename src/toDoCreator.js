import React from 'react';
import { useDispatch } from "react-redux"
import { useState } from "react";
import { add} from "./store/toDo"
import {useRef} from 'react'

function ToDoCreator(){
    const dispatch = useDispatch();
    const [newToDoContent, setNewToDoContent] = useState("");
    const formRef = useRef()
    
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(add(newToDoContent))
        formRef.current.reset()
        };


    return(
        <div>
            <form ref={formRef}>
                <input 
                    type="text"
                    name="content"
                    onChange={(e) => (setNewToDoContent(e.target.value))}
                    placeholder='Enter new item here'
                    class="AddItemInput"
                />
                <button onClick={handleClick} className="EditButton" >Add Item</button>
            </form>
        </div>
    )

}

export default ToDoCreator