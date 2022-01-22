import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from "./drawerSlice/drawerSlice";

export default configureStore({
    reducer: {
        drawer: drawerReducer
    },
})
