import React from 'react';
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import {edit, remove, completed} from "./store/toDo"

function ToDoEditor(){
    const dispatch = useDispatch();
    const [userEditInput, setUserEditInput] = useState("");
    const [numberToEdit, setNumberToEdit] = useState(0)
    const toDoList = useSelector((state) => state.toDo.data)
    const toDoListKeys = Object.keys(toDoList)

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(edit([userEditInput, numberToEdit]))
        setUserEditInput("");
        };


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
                                onChange={(e) => (setUserEditInput(e.target.value), setNumberToEdit(number))}
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