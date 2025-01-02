import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : '',
}

const CustomerSlice = createSlice(
    {
        name: 'customer',
        initialState: initialState,
        reducers:{
            printName:(state, {payload}) => {
                state.name = payload
            },
        }
    }
)

export const {printName} = CustomerSlice.actions;
export default CustomerSlice.reducer;