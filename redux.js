import { createStore } from "redux";

// reducer
const cardReduce = (state = {
    card: [{ id: 1, qty: 20 }],
},
    action) => {
    switch (action.type) {
        case "ADD_TO_CARD":
            {
                return {
                    ...state,
                    card: [...state.card, action.payload],
                };
            };
        default:
            return state;
    };

};
// store
const store = createStore(cardReduce);
console.log("onecreat store : ", store.getState())

// subscirbe
store.subscribe(() =>{
    console.log("store change", store.getState())
});
// dispacth
const action1 = {type: "ADD_TO_CARD", payload: {id: 2, qty: 20} }
store.dispatch(action1)
const action2 = {type: "ADD_TO_CARD", payload: {id: 10, qty: 6} }
store.dispatch(action2)