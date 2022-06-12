const registerReducer = (state,action)=>{
    switch (action.type){
        case "Handle Input":
            return {
                ...state,
                [action.field]:action.payload,
            };
            default:
                return state;
    }
}

export default registerReducer