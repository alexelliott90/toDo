import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { add} from "../store/toDo"
import { createContent } from '../store/userInput';
import {useRef} from 'react'

//to do list creator function
//allows user to add a todo item by entering an item in an input box and pressing a button
function ToDoCreator(){
    const dispatch = useDispatch();
    //declare formref so that input box resets on handleclick
    const formRef = useRef()
    //retrieve user content from store, which will be used to update the items
    const userContent = useSelector((state) => state.userInput.creatorContent)
    
    //handleclick function to dispatch user content to the add function in todo reducer and add the new content
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(add(userContent))
        formRef.current.reset()
        };

    return(
        <div>
            <form ref={formRef}>
                <input 
                    type="text"
                    name="content"
                    onChange={(e) => (dispatch(createContent([e.target.value])))}
                    placeholder='Enter new item here'
                    class="AddItemInput"
                />
                <button onClick={handleClick} className="EditButton" >Add Item</button>
            </form>
        </div>
    )

}

export default ToDoCreator