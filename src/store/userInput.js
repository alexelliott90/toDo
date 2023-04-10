import { createSlice } from "@reduxjs/toolkit";

//slice to store user input for forms
//this avoids the use of usestate hook, which would force rerender every time data is updated

export const userInputSlice = createSlice({
    name:"userInput",

    initialState: {
        editorContent: [],
        creatorContent: ''
    },

    reducers: {
        editContent: (state, action) => {
            state.editorContent = action.payload
        },

        createContent: (state, action) => {
            state.creatorContent = action.payload
        }
    }
})

export const {editContent, createContent
} = userInputSlice.actions

export default userInputSlice.reducer