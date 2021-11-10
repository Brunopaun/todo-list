import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { toggleStyle: false};

const listInitialState = { list:[] };

const toggleStyleSlicer = createSlice({
    name: 'togglestyle',
    initialState: initialState,
    reducers:{
        toggle(state) {
            state.toggleStyle = !state.toggleStyle;
        },    
    }
});

const listSlicer = createSlice({
    name: 'list',
    initialState: listInitialState,
    reducers:{
        add(state, action) {
                state.list.push(action.payload);
        },
        remove(state,action){
            const index = state.list.findIndex(element => element.id === parseInt(action.payload));
            state.list.splice(index,1);
        },
        check(state,action) {
            const filter = state.list.findIndex(element => element.id === action.payload);
            state.list[filter].checked = "true";
        },
    }
})

const store = configureStore({
    reducer: { toggle: toggleStyleSlicer.reducer, list: listSlicer.reducer} ,
});

export const toggleAction = toggleStyleSlicer.actions;

export const listAction = listSlicer.actions;

export default store;