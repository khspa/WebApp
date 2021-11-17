export const NavigateReducer = (state = "Home", action) => {
    switch (action.type) {
        case "switch":
            return action.payload
        default:
            return state
    }
}
