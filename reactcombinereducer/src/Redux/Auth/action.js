
export const actionTypes={
    LOGIN:"LOGIN",
    LOGOUT:"LOGOUT"
}

export const loginnow=()=>{

    return{
        type:actionTypes.LOGIN,
    }
}
export const logoutnow=()=>{

    return{
        type:actionTypes.LOGOUT,
    }
}