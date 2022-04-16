import { createSlice } from "@reduxjs/toolkit";
import { globalFilter } from "../actions";

const initialState = {
    globalFilterEvents: {}
}

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        incrementByAmount(state, action) {
            console.log("action",action)
            state.globalFilterEvents = action.payload
        },
    }
})

export const {incrementByAmount} = tableSlice.actions