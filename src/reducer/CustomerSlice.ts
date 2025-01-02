import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : '',
}

const CustomerSlice = createSlice(
    {
        name: 'customer',
        initialState: initialState,
        reducers:{
            printName:(state, action) => {
                state.name = action.payload
            },
        }
    }
)

export const {printName} = CustomerSlice.actions;
export default CustomerSlice.reducer;
