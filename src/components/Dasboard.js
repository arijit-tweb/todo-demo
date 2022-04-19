import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../redux/reducers/todoSlice';
import PerTodo from './todos/PerTodo';

const Dasboard = () => {
  const dispatch = useDispatch();
  const { todoList } = useSelector(state => state.todo);
  
  useEffect(()=>{
    dispatch(fetchTodos())
  }, [dispatch])

  return (
    <>
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {
          todoList.length !== 0 &&  todoList.map((e,i)=>{
              return <PerTodo elem={e} key={i} index={i}/>
            })
          }
        </div>
      </div>
    </>
  )
}

export default Dasboard