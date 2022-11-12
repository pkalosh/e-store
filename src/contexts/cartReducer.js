
export const CartReducer = (state, action) =>{
    let index = -1;
    if (action.payload)
    index = state.cartItmes.findIndex(x=> x.id === action.payload.id);

    switch (action.type){
        case "ADD":
        case "INCQTY":
            if (index === -1){
                state.cartItmes.push({ ...action.payload, quantity: 1 });
            }
            else {
                state.cartItmes[index].quantity++;
            }
            break;
        case "REMOVE":
            if (index > -1) {
                state.cartItmes.splice(index,1);
            }
            break;
        case "DECQTY":
            if (index > -1) {
                state.cartItmes[index].quantity--
            }
            break;
        case "CLEAR":
                if (index > -1) {
                    state.cartItmes = [];
                }
                break;
        default:
            return state
    }
}