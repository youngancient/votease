import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";


interface InitialState{
    check : boolean;
}

const initialState:InitialState = {
    check : true,
}

export const dataSlice = createSlice({
    name : "data",
    initialState,
    reducers :{

    }
});

export const dataSelector = (state: RootState) => state.data;

export const {} = dataSlice.actions;

export default dataSlice.reducer;