const STATE1 = {
    color1 : "green"
}

export function reducer(state = STATE1, action) {
    switch(action.type) {
        case "GET_COLOR" :
            return {...state, color1: action.color1}
        default :
            return state
    }
}