import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {
        // "iphone" : ["ipjone11", "iphone 12"]
    },
    reducers : {
        cachedResults : (state,action) =>{
            // state = {...action.payload, ...state}
            // Object.assign(state,action.payload);
            
            return { ...state, ...action.payload }; //es6 way
          
        },
    }
})
export const {cachedResults} = searchSlice.actions;
export default searchSlice.reducer;