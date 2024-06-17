import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../store'

const TodoCreate = () => {
    const setTodoList = useSetRecoilState(todoListState);
    const [todo, setTodo] = useState('');
    
    const addTodo = () => {
        if (todo === ""){
            return;
        }
        setTodoList(oldTodo => {
            
            return [
                ...oldTodo,
                {
                    todo,
                    isCompleted: false,
                    id:getId()

                }
            ]
            
        })
        setTodo("")
    }
    
  return (
    <div>
        <input type='text' onChange={e => setTodo(e.target.value)} className='border mr-2 text-center rounded-md' placeholder='Enter any task' value = {todo}/>
        <button onClick = {addTodo} className='px-2 border rounded-lg text-sm bg-red-400 hover:bg-blue-400'>Add</button>
    </div>
  )
}

export default TodoCreate

let id = 0
function getId(){
    return id++;
}