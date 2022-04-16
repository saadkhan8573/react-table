import { createSlice } from "@reduxjs/toolkit";
import { getUsers, resetUsers } from "../actions";

const initialState = {
    users: [],
    loading: true,
    hasError: false,
    errors: [],
    success: false,
}

export const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [resetUsers]: (state, action) => {
            state.loading = false;
            state.success = false;
            state.hasError = false;
            state.errors = [];
        },
        [getUsers.pending]: (state, action) => {
            state.loading = true;
            state.success = false;
        },
        [getUsers.fulfilled]: (state, action) => {
            state.users = [...action.payload];
            state.loading = false;
            state.success = true;
            state.hasError = false;
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false;
            state.hasError = true;
            state.success = false;
            state.errors = [...state.errors, ...action.payload];
        },
    }
})