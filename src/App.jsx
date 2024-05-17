import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin3Line } from "react-icons/ri";
import { MdDataSaverOn } from "react-icons/md";

import Navbar from './components/Navbar'
import {  v4 as uuidv4 } from 'uuid';

function App() {
  const [todo, setTodo] = useState ("")
  const [todos, setTodos] = useState ([])
  const [ShowFinished, setShowFinished] = useState (true)

  useEffect(() => {
    let todoString = localStorage.getItem("todos")
    if(todoString){

    let todos=JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }
  }, [])
  

  const saveLocalstorage = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished= (e) => {
    setShowFinished(!ShowFinished)
  }

  const handleSave=()=>{
    setTodos([...todos, {id: uuidv4(), todo, isCompleted : false}])
    setTodo("")
    saveLocalstorage()
  }
  

  const handleEdit=(e, id)=>{
    let t=todos.filter(i=>i.id===id)
    setTodo(t[0].todo)
    let newTodos= todos.filter(item=>{
      return item.id !== id
      
    });
    setTodos(newTodos)
    c
  }

  const handleDelete=(e, id)=>{
   
    // let index=todos.findIndex(item=>{
    //   return item.id === id;
    // })
    let newTodos= todos.filter(item=>{
      return item.id !== id
    });
    setTodos(newTodos)
    saveLocalstorage()
  }

  const handleChange=(e)=>{
    setTodo(e.target.value)

  }

  const handleCheckbox = (e) => {
    let id=e.target.name;
    let index=todos.findIndex(item=>{
      return item.id === id;
    })
    let newTodos= [...todos];
    newTodos[index].isCompleted= !newTodos[index].isCompleted
    setTodos(newTodos)
    saveLocalstorage()
  }
  


  return (
    <>
      <Navbar />
      <div className=' mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-slate-500 min-h-[70vh] md:w-[40%]'>
        <h1 className='font-semibold text-center text-2xl text-orange-200'>Mange your task at one place</h1>
        <div className="addtodo my-5 flex flex-col gap-4">
          <h2 className='text-xl font-bold text-gray-900'>ADD TODO</h2>
      <div className='flex'>
          <input onChange={handleChange} value={todo} type="text" className=' w-full rounded-full py-1 p-1'/>
          <button onClick={handleSave} s disabled={todo.length<=2} className='mx-2 disabled:bg-slate-700 bg-slate-800 hover:bg-slate-950 p-2 py-1 text-sm font-bold text-yellow-50 rounded-md'><MdDataSaverOn /> </button>
        </div></div>
        <input className='my-3' onChange={toggleFinished} type="checkbox" checked={ShowFinished}/>Show Finished
        <div className='h-[1px] opacity-150 w-full mx-auto'><hr /></div>

        <h2 className='text-xl font-bold my-1 text-orange-200'>Todo List</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todo to display</div> }
          {todos.map (item=>{

         return(ShowFinished || !item.isCompleted) && <div key={item.id} className="todo flex  my-3 justify-between">
          <div className='flex gap-5'>
          <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted}  id="" />
            <div className={item.isCompleted ? "line-through" : ""}> {item.todo}</div>
            </div>
              <div className="button flex h-full">
                <button onClick={(e)=>handleEdit (e, item.id)} className='edit bg-slate-800 hover:bg-slate-950 p-2 py-1 text-sm font-bold text-yellow-50 rounded-md mx-1'><FaRegEdit /> </button>
                <button onClick={(e)=>{handleDelete(e, item.id)}} className='delete bg-slate-800 hover:bg-slate-950 p-2 py-1 text-sm font-bold text-yellow-50 rounded-md mx-1'><RiDeleteBin3Line /></button>
              </div>
            
          </div>
          })}
        </div>
      </div>

    </>
  )
}

export default App
