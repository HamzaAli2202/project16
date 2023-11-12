export const colorReducer = (state = {
    selectedcolor: "red"
}, action) => {
    switch (action.type) {
        case "SELECT_COLOR":
            return {
                ...state,
                selectedcolor: action.payload
            }
            break
        default:
            return state
    }
    return state
}








// return {
//     ...state,
//     selectedfood: action.payload
// }
// break
// default:
// return state

// }
// return state
// }