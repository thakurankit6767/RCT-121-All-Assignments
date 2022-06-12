import axios from "axios"
import { useDispatch } from "react-redux"

export const Action = {

    APILOADING : "APILOADING ",
    APIAUCCESSFULL : "APIAUCCESSFULL ",
    APIFAILURE : "APIFAILURE ",

}

export const handleR = () => {

    return ( {
        type : Action.APILOADING
    })

}

export const handlesS = (data) =>{

    return({

        type : Action.APIAUCCESSFULL,
        payload : data

    })

}

export const handleE = () =>{

    return({
        type : Action.APIFAILURE
    })

}

