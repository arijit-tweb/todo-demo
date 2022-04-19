import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/api";

export const fetchTodos = createAsyncThunk('todo/fetchTodos',
    async () => {
        try{
            const response = axios.get(`${BASE_URL}/todos`);
            return response
        }catch(err){
            console.log(err);
        }
    }
);

export const editTodo = createAsyncThunk('todo/editTodo',
    async(id)=>{
        try{
            const response = axios.get(`${BASE_URL}/todos/${id}`);
            return response;
        }catch(err){
            console.log(err);
        }
    }
)



export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [],
        editable: {}
    },
    reducers: {
        cleanEditable: (state)=>{
            state.editable = {}
        },
        deleteTodo: (state, {payload})=>{
            console.log(payload);
            let temparr = [...state.todoList];
            temparr.splice(payload, 1);
            state.todoList = temparr;
        }
    },
    extraReducers: {
        [fetchTodos.pending]: ()=>{
            return console.log('pending');
        },
        [fetchTodos.fulfilled]: (state, {payload})=>{
            // console.log(payload);
            return {
                ...state,
                todoList: payload.data
            }
        },
        [fetchTodos.rejected]: ()=>{
            return console.log('rejected');
        },
        [editTodo.fulfilled]: (state, {payload})=>{
            // console.log(payload);
            if(payload.status === 200){
                return {
                    ...state,
                    editable: payload.data
                }
            }
        }
    }
});

export const {cleanEditable, deleteTodo} = todoSlice.actions;