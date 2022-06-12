import { actionTypes } from "./action";
const initialState={
    loading: false,
    error: false,
    todos:JSON.parse(localStorage.getItem("todos"))  || Array()
}
export const todoReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_TODOS_REQUEST: {
       
      return{
          ...state,
          loading:true,
          error:false,
      }
    }
    case actionTypes.GET_TODOS_SUCCESS: {
        return{
            ...state,
            loading:false,
            error:false,
            todos:payload
        }
    }
    case actionTypes.GET_TODOS_FAILURE: {
        return{
            ...state,
            loading:false,
            error:true,
            
        }
    }
    case actionTypes.POST_TODOS_REQUEST: {
        return{
            ...state,
            loading:true,
            error:false,
        }
      }
      case actionTypes.POST_TODOS_SUCCESS: {
        const value=JSON.parse(localStorage.getItem("todos"))  || Array()
        value.push(payload)
        localStorage.setItem("todos",JSON.stringify(value))
          return{
              ...state,
              loading:false,
              error:false,
              todos:JSON.parse(localStorage.getItem("todos"))
          }
      }
      case actionTypes.POST_TODOS_FAILURE: {
          return{
              ...state,
              loading:false,
              error:true,
              
          }
      }
    default:
      return state;
  }
};
