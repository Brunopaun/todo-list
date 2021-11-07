import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";


const initialState = { toggleStyle: false};


const toggleStyleSlicer = createSlice({
    name: 'togglestyle',
    initialState: initialState,
    reducers:{
        toggle(state) {
            state.toggleStyle = !state.toggleStyle;
        },    
    }
});


const store = configureStore({
    reducer: { toggle: toggleStyleSlicer.reducer}
});

export const toggleAction = toggleStyleSlicer.actions;

export default store;