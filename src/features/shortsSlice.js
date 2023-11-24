import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import config from '../config';

const initialState = {
    page: 0,
    shorts: [],
    loading: false,
};

const getShorts = createAsyncThunk('shorts/getShorts', async ({ page }) => {
    const res = await fetch(`${config.ENDPOINT}/shorts?_limit=4&_page=${page}`);

    return res.json();
});

const shortsSlice = createSlice({
    name: 'shorts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getShorts.pending, (state) => {
                state.loading = true;
            })
            .addCase(getShorts.rejected, (state) => {
                state.loading = false;
            })
            .addCase(getShorts.fulfilled, (state, { payload }) => {
                state.shorts.push(...payload);
            });
    },
});

export default shortsSlice.reducer;
export const {} = shortsSlice.actions;
export { getShorts };
