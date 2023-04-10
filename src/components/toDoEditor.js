import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import {edit, remove, completed} from "../store/toDo"
import { editContent } from '../store/userInput';

function ToDoEditor(){
    const dispatch = useDispatch();
    //set states for variables used to allow user to update todo items
    const toDoList = useSelector((state) => state.toDo.data)
    //generate keys for map function to display to do items
    const toDoListKeys = Object.keys(toDoList)
    //retrieve user content from store, which will be used to update the items
    const userContent = useSelector((state) => state.userInput.editorContent)

    //handle click function to allow the user to edit the contents of a todo item
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(edit(userContent))
        };

    //function to display to to-do list, including buttons for each item to edit, delete or mark as completed
    //uses the todolistkeys as the key for items
    const toDoListDisplay = toDoListKeys.map((number) =>
            <div key={number.toString()}>
                <div className="row">
                    <div className='col-md-1'>
                    </div>
                    <div className="col-md-3">
                        <h4><strong>Item {number} :</strong></h4><p>{toDoList[number].content}</p><p><strong>Item completed:</strong> {toDoList[number].completed.toString()}</p>
                    </div>
                    <div class="col-md-6">
                        <form>
                            <input 
                                type="text"
                                name="content"
                                onChange={(e) => (dispatch(editContent([e.target.value, number])))}
                                placeholder={`Edit the content of item ${number} here`}
                                className = "AddItemInput"
                            />
                            <button type="submit" onClick={handleClick} className="EditButton">Edit</button>

                        </form>
                        
                        <button onClick={() => dispatch(remove(number))} className="RemoveButton">Remove</button>
                        <button onClick={() => dispatch(completed(number))} className="CompleteButton">Complete</button>
                    </div>
                    <div className='col-md-2'>
                    </div>
                    <hr class="solid"/>
                </div>     
                        
                    
                    
            </div>
         
    )

    
    return(
        <div>
            {toDoListDisplay}
        </div>
    )

}

export default ToDoEditor