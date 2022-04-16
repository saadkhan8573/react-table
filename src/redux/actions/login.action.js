import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogin } from "../services";


export const loginUser = createAsyncThunk(
    "login/list",
    async (user) => {
        try {
            const res = await UserLogin.login(user);
            localStorage.setItem("login",res.data.token)
            console.log("res", res)
            return res.data.user;
        } catch (err) {
            console.log(err.response)
        }
    }
)

export const LoginActions = {
    loginUser
}