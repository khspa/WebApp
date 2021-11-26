export const NavigateReducer = (state = "Home", action) => {
    switch (action.type) {
        case "switch":
            return action.payload
        default:
            return state
    }
}

export const DateRefreshReducer = (state = false, action) => {
    switch (action.type) {
        case "refresh":
            return !state
        default:
            return state
    }
}

export const UserConfigReducer = (state = {}, action) => {
    switch (action.type) {
        case "initialize":
            return action.payload
        default:
            return state
    }
}

export const ResetTimeLineReducer = (state = false, action) => {
    switch (action.type) {
        case "reset":
            return !state
        default:
            return state
    }
}

export const PaymentReducer = ( state = {}, action ) => {
    switch (action.type) {
        case "set":
            return action.payload
        default:
            return state
    }
}