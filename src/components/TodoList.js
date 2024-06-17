import React from 'react'
import TodoCreate from './TodoCreate'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../store'
import DisplayTodo from './DisplayTodo'

const TodoList = () => {
    const todoList = useRecoilValue(todoListState);
    console.log(todoList)
    
  return (
    <div>
        <TodoCreate/>
        {
            todoList?.map(item => (
                <DisplayTodo item = {item} key = {item.id}/>
            ))
        }
    </div>
  )
}

export default TodoList
