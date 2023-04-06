import { createSlice } from "@reduxjs/toolkit";

export const toDoSlice = createSlice({
    name: "toDo",

    initialState: {
        nextId: 4,
        data: 
        {   
            1: {
                content: 'Content 1',
                completed: false
            },

            2: {
                content: 'Content 2',
                completed: false
            },

            3: {
                content: 'Content 3',
                completed: false
            }
        }
    },

    reducers: {
        edit: (state, action) => {
            if(action.payload[0].length > 0){
                state.data[action.payload[1]].content = action.payload[0]
            }else{
                alert("Please enter something in the box to edit")}
        },

        remove: (state, action) => {
            const keys = Object.keys(state.data)
            delete state.data[action.payload]
        },

        completed: (state, action) => {
            state.data[action.payload].completed = true
        },

        add: (state, action) => {
            state.data[state.nextId] = {content: action.payload, completed: false}
            state.nextId += 1
        }
    }
})

export const { edit, remove, completed, add
} = 
    toDoSlice.actions

export default toDoSlice.reducer