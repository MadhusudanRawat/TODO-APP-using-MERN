import React,{useEffect,useState} from 'react'
import "./todo.css"
import { getAllTODOS,createNewTODOS,deleteTodo,updateTodoData } from '../../../reduxStore/todoAction'
import {useSelector,useDispatch} from "react-redux"
function Todo() {
  const {loading,todoList } = useSelector((state) => state.todo)
  const [title,setTitle] = useState("")
  const dispatch = useDispatch()
  
  const inputTitleInputHandler = (e) => {
    setTitle(e.target.value)
  }

  const submitTitle = (e) =>{
    e.preventDefault()
    dispatch(createNewTODOS({title}))
  }

  useEffect(()=>{
    dispatch(getAllTODOS())
},[dispatch])

  const deleteTodoHandler = (id) =>{
    dispatch(deleteTodo(id))
  }

  const updateTodoHandler = (form) =>{
    dispatch(updateTodoData(form))
  }
  return (
    <>
    <div className='todo-header container w-50 mt-5 mb-5'>
        <form class="d-flex" onSubmit={submitTitle}>
          <input class="form-control me-2" type="search" onChange={inputTitleInputHandler} placeholder="TODO Title" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">ADD</button>
        </form>
        {loading == false ? todoList.map((todoItem)=>(
          <div className="card mt-5" style={{"width": "18rem;"}}>
            <div className="card-body">
                  <h5 className="card-title">{todoItem.title}</h5>
                  <hr/>
                  <p className="card-text">{todoItem.description}</p>
                <div className='d-flex justify-content-around'>
                      <button type='button' className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                      <button href="#" className="btn btn-primary" onClick={()=>deleteTodoHandler(todoItem._id)}>Delete</button>
                </div>
            </div>
        </div>
        )) : <p>Loging</p>}
    </div>
    </>
  )
}

export default Todo