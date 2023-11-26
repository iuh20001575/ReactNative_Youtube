import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videos: [],
    index: -1,
    isPlaying: true,
    count: 0,
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
            state.count = 0;
        },
        reset: (state) => {
            state.videos = [];
            state.index = -1;
            state.count = 0;
        },
        setPlaying: (state, { payload }) => {
            state.isPlaying = payload;
        },
        togglePlaying: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        inc: (state) => {
            state.count += 1;
        },
    },
});

export const { addVideo, prevVideo, reset, setPlaying, togglePlaying, inc } = playingVideoSlice.actions;

export default playingVideoSlice.reducer;
