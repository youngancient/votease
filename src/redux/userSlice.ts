
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
        },
        removeUser :(state)=>{
            const newUsers = state.users.filter((ele)=>{
                ele.vin !== state.user?.vin
            });
            state.users = newUsers;
        },
    }
});

export const userSelector = (state: RootState) => state.user;

export const {setUser,addUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
