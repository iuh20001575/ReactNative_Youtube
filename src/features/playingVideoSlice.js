import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videos: [],
    index: -1,
    isPlaying: true,
};

export const playingVideoSlice = createSlice({
    name: 'playingVideo',
    initialState,
    reducers: {
        addVideo: (state, { payload }) => {
            state.videos.push(payload);
            state.index += 1;
        },
        prevVideo: (state) => {
            state.index -= 1;
            state.videos.pop();
        },
        reset: (state) => {
            state.videos = [];
            state.index = -1;
        },
        setPlaying: (state, { payload }) => {
            state.isPlaying = payload;
        },
        togglePlaying: (state) => {
            state.isPlaying = !state.isPlaying;
        },
    },
});

export const { addVideo, prevVideo, reset, setPlaying, togglePlaying } = playingVideoSlice.actions;

export default playingVideoSlice.reducer;
