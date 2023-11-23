import { configureStore } from '@reduxjs/toolkit';
import playingVideoReducer from '../features/playingVideoSlice';
import themeReducer from '../features/themeSlice';

export const store = configureStore({
    reducer: {
        playingVideo: playingVideoReducer,
        theme: themeReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
