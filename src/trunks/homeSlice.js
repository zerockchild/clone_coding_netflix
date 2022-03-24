import { createSlice } from '@reduxjs/toolkit';

const initialState = {isPlaying: false};

const homeSlice = createSlice({
    name: 'playBanner',
    initialState,
    reducers: {
        play: (state, action) => {
            state.isPlaying = true;
        },
        stop: (state, action) => {
            state.isPlaying = false;
        },
    }
})

export const { play } = homeSlice.actions
export default homeSlice.reducer