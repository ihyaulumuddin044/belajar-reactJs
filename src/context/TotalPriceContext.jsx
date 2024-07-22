import { createContext, useContext, useReducer } from "react";

const totalPriceContext = createContext(null);

const totalPriceDispactContext = createContext(null);

const totalPriceReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE": {
            return {
                total: action.payload.total,
            };
        }
        default: {
            throw Error("Unknow Action: " + action.type);
        }
    }
}

export function TotalPriceProvider({ children }) {
    const [totalPrice, dispatch] = useReducer(totalPriceReducer, {total: 0});
    return (
        <totalPriceContext.Provider value={totalPrice}>
            <totalPriceDispactContext.Provider value= {dispatch}>
            {children}
            </totalPriceDispactContext.Provider>
        </totalPriceContext.Provider>
    )
}

export function useTotalPrice(){
    return useContext(totalPriceContext)
}

export function useTotalPriceDispact () {
    return useContext(totalPriceDispactContext)
}