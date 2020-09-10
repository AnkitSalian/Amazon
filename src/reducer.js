export const initialState = {
    basket: [],
}

const deleteItem = (basket, item) => {

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
                basket: deleteItem(...state.basket, action.item)
            }
    }
}

export default reducer;