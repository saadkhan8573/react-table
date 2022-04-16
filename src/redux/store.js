import {
    configureStore
} from '@reduxjs/toolkit';
import { userReducers, tableReducer, usersLoginReducer } from './reducers';
import { setupListeners } from '@reduxjs/toolkit/query';

const store = configureStore({
    reducer: {
        user: userReducers,
        table: tableReducer,
        login : usersLoginReducer
    }
})


export default store;
setupListeners(store.dispatch);