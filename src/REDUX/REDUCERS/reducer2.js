import { LOGIN_SUCCESS,LOGIN_FAILURE } from "../Constant/constant";


const initialState = {
    isAuthenticated: false,
    user: null,
    error: null
  };
  
  const authReducer = (state = initialState, action) => {

    
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          error: null

        //   console.log(action.payload)
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          error: action.payload

        };
    //   case LOGOUT:
    //     return {
    //       ...state,
    //       isAuthenticated: false,
    //       user: null,
    //       error: null
    //     };
      default:
        return state;
    }
  };
  
  export default authReducer;