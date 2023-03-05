import {
    CATCH_ERROR,
    GET_ALL_TODO_REQUEST,
    GET_ALL_TODO_SUCCESS,
    GET_ALL_TODO_FAIL,
    CREATE_TODO_REQUEST,
    CREATE_TODO_SUCCESS,
    CREATE_TODO_FAIL,
    DELETE_TODO_FAIL,
    DELETE_TODO_REQUEST,
    DELETE_TODO_SUCCESS,
    UPDATE_TODO_FAIL,
    UPDATE_TODO_REQUEST,
    UPDATE_TODO_SUCCESS
} from "./constants"


export const todoReducer = (state =  {todoList:[]} ,action) =>{
    switch(action.type){
        case GET_ALL_TODO_REQUEST :
            return {
                loading : true,
                todoList : []
            };
        case GET_ALL_TODO_SUCCESS :
            return {
                loading : false,
                todoList : action.payload
            }

        case GET_ALL_TODO_FAIL :
            return {
                loading: false,
                error: action.payload,
            };
        case CATCH_ERROR :
            return {
                ...state,
                error: null,
            }
        case CREATE_TODO_REQUEST:
            return {
                loading : true,
                ...state,
            }
        case CREATE_TODO_SUCCESS :
            return {
                todoList :[action.payload,...state.todoList],
                loading : false,
            }
        case CREATE_TODO_FAIL :
            return {
                loading : false,
                error : action.payload
            }

            case DELETE_TODO_REQUEST:
                return {
                    ...state,
                    loading : true,
                }
            case DELETE_TODO_SUCCESS :
                return {
                    ...state,
                    loading : false,
                    todoList : [...state.todoList.filter((value)=> value._id != action.payload)]
                }
            case DELETE_TODO_FAIL :
                return {
                    loading : false,
                    error : action.payload
                }

            case UPDATE_TODO_REQUEST :
                return {
                    ...state,
                    loading : true
                }
            case UPDATE_TODO_SUCCESS:
                return {
                    loading : false,
                    todoList : [action.payload]
                }
            case UPDATE_TODO_FAIL :
                return{
                    ...state,
                    loading : false,
                    error : action.payload
                }
        default :
        return state
    }

}  