import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { createContext } from "react";


const AddToCart = createAction("ADD_TO_CART")

const cartReducer = createReducer([], (builder) => {
    builder.addCase(AddToCart, (state, action) => {
        state.push(action.payload)
    });
});

const login = createAction("CREAT_SESSION")

const loginReducer = createReducer({status :false}, (builder) => {
    builder.addCase(login, (state, action) => {
        state.status = true;
    });
});

const store = configureStore({
    reducer: {
        login: loginReducer,
        cart: cartReducer
    }
})
console.log("onecreat store : ", store.getState())

store.subscribe(() => {
    console.log("store change", store.getState())
});

store.dispatch(AddToCart({ id: 1, qty: 20 }));
store.dispatch(AddToCart({ id: 2, qty: 10 }));
store.dispatch(login())