export const actions = {

    loginrequest : "loginrequest",
    loginsuccess : "loginsuccess",
    loginerror : "loginerror"
}

export const handlrequest = () =>{

    return({
        type: actions.loginrequest
    })
}

export const handleSuccess = () =>{

    console.log()

    return({
        type: actions.loginsuccess,
     
    })
}

export const handleError = () =>{

    return({
        type: actions.loginerror
    })
}