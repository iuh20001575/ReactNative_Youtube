import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    videos: [],
    index: -1,
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
    },
});

export const { addVideo, prevVideo, reset } = playingVideoSlice.actions;

export default playingVideoSlice.reducer;
