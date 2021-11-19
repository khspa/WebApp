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