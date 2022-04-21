import { createSlice } from "@reduxjs/toolkit";

const getInitvalue = ()=>{
    const value = localStorage.getItem('multiplex');
    return value ? value : []
}

export const multiplexSlice = createSlice({
    name: 'multiplex',
    initialState: {
        multiplex: getInitvalue()
    },
    reducers: {
        addMultiplex: (state,{payload})=>{
            let tempArr = [...state.multiplex];
            const {name, screen, seatType} = payload;
            let obj = {
                name,
                [screen]: {
                    name: screen,
                    seatType
                }
            }

            tempArr.push(obj)

           state.multiplex = tempArr;
           console.log(state.multiplex);
           localStorage.setItem('multiplex', JSON.stringify(state.multiplex))
        }
    }
});

export const {addMultiplex} = multiplexSlice.actions;