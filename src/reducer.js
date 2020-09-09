export const initialState = {
    basket: [],
}

const deleteItem = (basket, item) => {
    
}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case "REMOVE_FROM_BASKET":
            return deleteItem(...state.basket, action.item)
    }
}

export default reducer;