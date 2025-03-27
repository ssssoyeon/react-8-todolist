
import './App.css'
import Header from './components/Header'
import TodoEditor from './components/TodoEditor'
import TodoList from './components/TodoList'
import { useState, useRef } from 'react'

const mockData = [
  {
    id:0,
    isDone:false,
    content:'React 공부하기',
    date: new Date().getTime()
  },
  {
    id:1,
    isDone:false,
    content:'산책하기',
    date: new Date().getTime()
  },
  {
    id:2,
    isDone:false,
    content:'노래 연습하기',
    date: new Date().getTime()
  }
]

function App() {

  const [todos, setTodos] = useState(mockData)
  const idRef = useRef(3)

  const onCreate=(content)=>{
    const newTodo={
      id:idRef.current++,
      isDone:false,
      content: content,
      date: new Date().getTime()
    }

    setTodos([newTodo, ...todos])
  }
  const onUpdate=(targetId)=>{
    setTodos(
      todos.map((todo)=>
        todo.id===targetId
      ? { ...todo, isDone: !todo.isDone }:todo
      )
    )
  }

  const onDelete=(targetId)=>{
    setTodos(
      todos.filter((todo)=>todo.id!==targetId)
    )
  }

  return (
    <div>
      <div className="App">
        <Header />
        <TodoEditor onCreate={onCreate}/>
        <TodoList todos={todos} onUpdate={onUpdate}
        onDelete={onDelete}/>
      </div>
    </div>
  )
}

export default App
