import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name : '',
}

const CustomerSlice = createSlice(
    {
        name: 'customer',
        initialState: initialState,
        reducers:{
            printName:(state) => {
                console.log(state.name);
                return state.name
            },
        }
    }
)

export const {printName} = CustomerSlice.actions;
export default CustomerSlice.reducer;