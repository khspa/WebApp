export const go = (page)=> {
    return {
        type: "switch",
        payload: page,
    }
}

export const refresh = () => {
    return {
        type: "refresh",
    }
}

export const initUser = (user) => {
    return {
        type: "initialize",
        payload: user
    }
}

export const initTimeline = () => {
    return {
        type:"reset"
    }
}

export const setPayment = (payment) => {
    return {
        type: "set",
        payload: payment
    }
}