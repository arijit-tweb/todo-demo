import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../helpers/api";

export const fetchTodos = createAsyncThunk('todo/fetchTodos',
    async () => {
        try {
            const response = axios.get(`${BASE_URL}/todos`);
            return response
        } catch (err) {
            console.log(err);
        }
    }
);

export const editTodo = createAsyncThunk('todo/editTodo',
    async (id) => {
        try {
            const response = axios.get(`${BASE_URL}/todos/${id}`);
            return response;
        } catch (err) {
            console.log(err);
        }
    }
)

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        todoList: [],
        editable: {},
        likeAndDislike: []
    },
    reducers: {
        cleanEditable: (state) => {
            state.editable = {}
        },
        deleteTodo: (state, { payload }) => {
            console.log(payload);
            let temparr = [...state.todoList];
            temparr.splice(payload, 1);
            state.todoList = temparr;
        },
        changeLikeDisLike: (state, {payload})=> {
            let tempArr = [...state.todoList];

            const {index, name} = payload;

            // usally the like and dislike array contains perticular user is for every post, I dont have any id here thats why using the post index. concept will be the same. 
            if(name === 'like'){
                if(tempArr[index].dislike.includes(index)){
                    const i = tempArr[index].dislike.indexOf(index);
                    tempArr[index].dislike.splice(i, 1);
                }
                if(tempArr[index].like.includes(index)) return;
                
                tempArr[index].like.push(index);
            }
            if(name === 'dislike'){
                if(tempArr[index].like.includes(index)){
                    const i = tempArr[index].like.indexOf(index);
                    tempArr[index].like.splice(i, 1);
                }
                if(tempArr[index].dislike.includes(index)) return;
                
                tempArr[index].dislike.push(index);
            }

            state.todoList = tempArr;
        }
    },
    extraReducers: {
        [fetchTodos.pending]: () => {
            return console.log('pending');
        },
        [fetchTodos.fulfilled]: (state, { payload }) => {
            // console.log(payload);
            if (payload.status === 200) {
                let tempArr = payload.data;
                tempArr.forEach((e) => {
                    e.like = [];
                    e.dislike = [];
                });
                return {
                    ...state,
                    todoList: tempArr
                }
            }
        },
        [fetchTodos.rejected]: () => {
            return console.log('rejected');
        },
        [editTodo.fulfilled]: (state, { payload }) => {
            // console.log(payload);
            if (payload.status === 200) {
                return {
                    ...state,
                    editable: payload.data
                }
            }
        }
    }
});

export const { cleanEditable, deleteTodo, changeLikeDisLike } = todoSlice.actions;