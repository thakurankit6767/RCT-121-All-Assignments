import { Action } from "./action"

const initState = { 
    
    loading : false ,

    error : false,

    data : [] 

}

export const apiReducer = (store = initState ,action) =>{

    switch(action.type)
    {
        case Action.APILOADING : {

            return({
                ...store,
                loading : true,
            })

        }

        case Action.APIAUCCESSFULL : {

            

            return({
                ...store,
                loading : false,
                data : action.payload
            })
        }

        case Action.APIFAILURE : {

            return({

                ...store,
                loading : false,
                error : true
            })

        }

        default : return store;
    }

}
