import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/api";

export const fetchTodos = createAsyncThunk('todo/fetchTodos',
    async () => {
        const response = axios.get(`${BASE_URL}/todos`);
        return response
    }
)


export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: []
    },
    reducers: {},
    extraReducers: {
        [fetchTodos.pending]: ()=>{
            return console.log('pending');
        },
        [fetchTodos.fulfilled]: (state, {payload})=>{
            console.log(payload);
            return {
                ...state,
                todoList: payload.data
            }
        },
        [fetchTodos.rejected]: ()=>{
            return console.log('rejected');
        },
    }
})