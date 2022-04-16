// import { createSlice } from "@reduxjs/toolkit";
// import { getUsers, resetUsers } from "../actions";

// const initialState = {
//     user: {}
// }

// export const usersLoginSlice = createSlice({
//     name: "login",
//     initialState,
//     reducers: {
//         login(state, action) {
//             setTimeout(() => {
//                 const { username, password } = action.payload;
//                 console.log("action", action)
//                 if (username == "saadkhan" && password == "123456789") {
//                     const token = "%5q%|CZ!wrR*&A(!cRLy+7=N|;aeDC=p[4]1Uq%98r7LcX~)RKVq[xjV98A{GoX";
//                     localStorage.setItem("token", token)
//                     state.user = {
//                         id: 1021458,
//                         username,
//                         password,
//                         token
//                     }
//                 } else {
//                     console.log("Invalid Login")
//                 }
//             }, 50);
//         },
//     }
// })

// export const { login } = usersLoginSlice.actions;

import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions";

const initialState = {
    user: {},
    loading : false,
    hasError : false,
    success : false
}

export const usersLoginSlice = createSlice({
    name: "login",
    initialState,
    extraReducers: {
        [loginUser.pending]: (state, action) => {
            state.loading = true;
            state.success = false;
        },
        [loginUser.fulfilled]: (state, action) => {
            state.user = action.payload;
            state.loading = false;
            state.hasError = false;
            state.success = true;
        },
        [loginUser.rejected]: (state, action) => {
            state.loading = false;
            state.hasError = true;
            state.success = false;
            state.errors = [...state.errors, ...action.payload];
        },
    }
})