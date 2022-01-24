import { createSlice } from '@reduxjs/toolkit'

export const episodeSlice = createSlice({
    name: 'episode',
    initialState: {
        episode: {
            title: "Episode 1",
            videoSource:"https://90dfvods.fra1.cdn.digitaloceanspaces.com/Ep1/ep1Manifest.mpd",
            description: "Episode 1 of Wubby watching 90 Day Fiance otherwise known as wubby playing the sims",
            date: "69/420/2069"
        },
    },
    reducers: {
        getEpisode1: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            console.log("Print from getEpisode1 test" ,state.episode.date)
            state.episode = {
                title: "Episode 1",
                videoSource:"https://90dfvods.fra1.cdn.digitaloceanspaces.com/Ep1/ep1Manifest.mpd",
                description: "Episode 1 of Wubby watching 90 Day Fiance otherwise known as wubby playing the sims",
                date: "69/420/2069"
            }
        },
        getEpisode2: (state) => {
            console.log("Print from getEpisode2 test" ,state.episode)
            state.episode = {
                title: "Episode 2",
                videoSource:"https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd",
                description: "Episode 2 of Wubby watching 90 Day Fiance otherwise known as wubby playing the sims",
                date: "69/420/2069"
            }
        },
        getEpisode3: (state) => {
            console.log("Print from getEpisode3 test" ,state.episode)
            state.episode = {
                title: "Episode 3",
                videoSource:"",
                description: "Episode 3 of Wubby watching 90 Day Fiance otherwise known as wubby playing the sims",
                date: "69/420/2069"
            }
        },
        getEpisode4: (state) => {
            console.log("Print from getEpisode4 test" ,state.episode)
            state.episode = {
                title: "Episode 4",
                videoSource: "",
                description: "Episode 4 of Wubby watching 90 Day Fiance otherwise known as wubby playing the sims",
                date: "69/420/2069"
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { getEpisode1, getEpisode2, getEpisode3, getEpisode4} = episodeSlice.actions

export default episodeSlice.reducer
