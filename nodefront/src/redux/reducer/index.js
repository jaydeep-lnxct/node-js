import { createSlice } from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: 'user',
    initialState: { value: [] },

    reducers: {
        userAction(state, action) {
            state.value = action.payload
        }
    },
});

export const {userAction} = userSlice.actions;
export const userReducer = userSlice.reducer;