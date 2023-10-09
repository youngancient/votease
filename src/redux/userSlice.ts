
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IShortUser, IUser, UsersDb } from "../../constants/Users";


interface InitialState{
    user : IShortUser | null;
    users : IUser[];
}

const initialState:InitialState = {
    users : UsersDb,
    user : null
}

export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers :{
        setUser : (state,{payload})=>{
            state.user = payload;
        },
        addUser :(state, {payload})=>{
            const newUsers = [...state.users,payload];
            state.users = newUsers;
        }
    }
});

export const userSelector = (state: RootState) => state.user;

export const {setUser,addUser} = userSlice.actions;

export default userSlice.reducer;
