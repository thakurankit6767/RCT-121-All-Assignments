import { actions } from "./action"


export const AuthR = (action)=>{

    switch(action.type)
    {
        case actions.loginrequest : {

            return({
                ...store,
                isauth : false,
            })

        }
        case actions.loginsuccess : {

            console.log(action.payload)

            return({
                ...store,
                isauth : true,
                token : action.payload
            })
        }
        case actions.loginerror : {

            return({
                ...store,
                isauth : false,
            })
        }
        default : return store;
    }

}