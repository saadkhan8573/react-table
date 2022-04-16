import { createAsyncThunk,createAction } from "@reduxjs/toolkit";
import { UserData } from "../services";

export const resetUsers = createAction("users/reset");

export const getUsers = createAsyncThunk(
    "users/list",
    async () => {
        const res = await UserData.fetchAll();
        console.log("resArr",res)
        return res.data.results;
    }
)

export const UserActions = {
    resetUsers,
    getUsers
}