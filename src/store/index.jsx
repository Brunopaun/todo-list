import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const initialState = { toggleStyle: false};

const listInitialState = { list:[] };

const filterInitialState = {filter: null};

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
            state.list[filter].checked = !state.list[filter].checked;
        },
        removeall(state){
            state.list = state.list.filter(element => element.checked === false);
        }
    }
})

const filterSlicer = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers:{
        filter(state,action){
            state.filter = action.payload;
        }
    }
})

const store = configureStore({
    reducer: { toggle: toggleStyleSlicer.reducer, list: listSlicer.reducer, filter: filterSlicer.reducer} ,
});

export const toggleAction = toggleStyleSlicer.actions;

export const listAction = listSlicer.actions;

export const filterAction = filterSlicer.actions;

export default store;