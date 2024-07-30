import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
}

const initialState: CounterState = {
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            // state.user = payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setUser } = userSlice.actions

export default userSlice.reducer