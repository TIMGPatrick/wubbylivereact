import { createSlice } from '@reduxjs/toolkit'

export const drawerSlice = createSlice({
    name: 'drawer',
    initialState: {
        value: false,
    },
    reducers: {
        openDrawer: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log("Print from openDrawer test" ,state.value)
            state.value = true
        },
        closeDrawer: (state) => {
            state.value = false
        },
    },
})

// Action creators are generated for each case reducer function
export const { openDrawer, closeDrawer } = drawerSlice.actions

export default drawerSlice.reducer
