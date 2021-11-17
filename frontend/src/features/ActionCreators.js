export const go = (page)=> {
    return {
        type: "switch",
        payload: page,
    }
}