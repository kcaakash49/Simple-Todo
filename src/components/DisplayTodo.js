import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListState } from '../store'

const DisplayTodo = ({item}) => {
    const [todoList, setTodoList] = useRecoilState(todoListState)
    const index = todoList.findIndex(element => item.id === element.id)

    const handleChange = (e) => {
            const newTodoList = replaceChangeValue(todoList,index, {
                ...item,
                todo:e.target.value
            })
            setTodoList(newTodoList);
    }
    const handleCompletedState = (e) =>{
        const newTodoList = replaceChangeValue(todoList,index, {
            ...item,
            isCompleted: !item.isCompleted
        })
        setTodoList(newTodoList);
    }
    const handleDeleteButton = () =>{
        const newTodoList = todoList.filter(element  => item.id !== element.id)
        setTodoList(newTodoList)
    }
  return (
    <div>
        <input type = "text" value={item.todo} onChange={handleChange} className='border text-center mr-2'/>
        <input type = "checkbox" value={item.isCompleted} onChange ={handleCompletedState} className='mr-2'/>
        <button className='border px-2 bg-slate-300' onClick={handleDeleteButton}>x</button>

    </div>
  )
}

export default DisplayTodo

function replaceChangeValue(list,index,item){
    return [...list.slice(0,index),item,...list.slice(index+1)]
}