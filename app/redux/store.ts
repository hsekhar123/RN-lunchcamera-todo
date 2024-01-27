
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import AddDataSlice from "./reducers/reducer"
const rootStore=combineReducers({
    AddDataSlice
})
const store=configureStore({reducer:rootStore})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch