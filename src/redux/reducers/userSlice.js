import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { AUTH_URL } from "../../helpers/api"

export const loginUser = createAsyncThunk('user/loginUser',
    async (body) => {
        try {
            const data = axios.post(`${AUTH_URL}/login`, body);
            return data;

        } catch (err) {
            console.log(err);
        }
    }
);

export const signupUser = createAsyncThunk('user/signupUser',
    async (body) => {
        try {
            const data = axios.post(`${AUTH_URL}/register`, body);
            return data;

        } catch (err) {
            console.log(err);
        }
    }
);

export const userSlice = createSlice({
    name: "user",
    initialState: {
        loginToken: {},
        signupData: {},
        errorData: {}
    },
    reducers: {
        logout: (state) => {
            state.loginToken = {};
            state.errorData = {}
        }
    },
    extraReducers: {
        [loginUser.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                loginToken: payload.data
            }
        },
        [loginUser.rejected]: (state) => {
            return {
                ...state,
                errorData: {
                    response: 'something went wrong'
                }
            }
        },
        [signupUser.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                signupData: payload.data
            }
        }
    }
});

export const { logout } = userSlice.actions;