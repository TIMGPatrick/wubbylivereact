import { configureStore } from '@reduxjs/toolkit'
import drawerReducer from "./drawerSlice/drawerSlice";
import episodeReducer from "./episodeSlice/episodeSlice"

export default configureStore({
    reducer: {
        drawer: drawerReducer,
        episode: episodeReducer
    },
})
