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
} from "../reduxStore/constants"
import axios from "axios"

export const getAllTODOS = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_TODO_REQUEST })
        const { data } = await axios.get("http://localhost:4000/");
        console.log("data:",data);
        dispatch({ type: GET_ALL_TODO_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({ type: GET_ALL_TODO_FAIL })
    }
}

export const createNewTODOS = (title) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_TODO_REQUEST })
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const { data } = await axios.post(`http://localhost:4000/`,title,config);
        
        dispatch({ type: CREATE_TODO_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({ type: CREATE_TODO_FAIL,payload :  error})
    }
}

export const deleteTodo = (id) => async(dispatch)=>{
    try {
        dispatch({ type: DELETE_TODO_REQUEST })
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const { data } = await axios.delete(`http://localhost:4000/${id}`,config);
        
        dispatch({ type: DELETE_TODO_SUCCESS, payload: id })
    } catch (error) {
        dispatch({ type: DELETE_TODO_FAIL,payload :  error})
    }
}

export const updateTodoData = (updateData) => async(dispatch)=>{
    try {
        console.log("=========updateData==========");
        console.log(updateData);
        dispatch({ type: UPDATE_TODO_REQUEST })
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
        const { data } = await axios.patch(`http://localhost:4000/${updateData.id}`,updateData,config);
        console.log("<><Update>",data);
        dispatch({ type: UPDATE_TODO_SUCCESS, payload: data.data })
    } catch (error) {
        dispatch({ type: UPDATE_TODO_FAIL,payload :  error})
    }
}