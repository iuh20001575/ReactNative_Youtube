import { configureStore } from '@reduxjs/toolkit';
import playingVideoReducer from '../features/playingVideoSlice';
import shortsReducer from '../features/shortsSlice';
import themeReducer from '../features/themeSlice';

export const store = configureStore({
    reducer: {
        playingVideo: playingVideoReducer,
        theme: themeReducer,
        shorts: shortsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
