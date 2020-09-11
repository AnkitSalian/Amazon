export const initialState = {
    basket: [],
    user: null,
}

//Selector
export const getBasketTotalAmount = (basket) => {
    return basket?.reduce((val, obj) => val + (obj['price'] * obj['count']), 0);
}

const addItem = (basket) => {

    let elem = basket.pop();
    if (basket.length > 0) {
        let addFlag = true;
        for (let i = 0; i < basket.length; i++) {
            let item = basket[i];
            if (item.id == elem.id) {
                addFlag = false;
                break;
            }
        }
        if (addFlag) {
            basket.push(elem);
        }

    } else {
        basket.push(elem);
    }
    return basket;
}

const deleteItem = (basket) => {

    let elem = basket.pop();
    let index = 0;
    if (basket.length > 0) {

        for (let i = 0; i < basket.length; i++) {
            let item = basket[i];
            if (item.id == elem.id) {
                index = i;
                break;
            }
        }

    }
    if (basket[index].count == 0) {
        basket.splice(index, 1);
    }
    return basket;
}

const reducer = (state, action) => {

    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                // basket: [...state.basket, action.item]
                basket: addItem([...state.basket, action.item])
            }
        case "REMOVE_FROM_BASKET":
            return {
                ...state,
                basket: state.basket.filter(item => item.id !== action.id)
            }
        case "REMOVE_ONE_ITEM":
            return {
                ...state,
                basket: deleteItem([...state.basket, action.item])
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
        case "EMPTY_BASKET":
            return {
                ...state,
                basket: []
            }
    }
}

export default reducer;