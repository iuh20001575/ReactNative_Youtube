import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    dark: false,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, { payload }) => {
            state.dark = payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
