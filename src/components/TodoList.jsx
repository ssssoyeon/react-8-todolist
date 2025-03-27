import React, { useState } from 'react'
import TodoItem from './TodoItem'
import './TodoList.css'

const TodoList = ({ todos, onUpdate, onDelete }) => {

    const [search, setSearch] = useState('')

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if (search === '') {
            return todos;
        }
        return todos.filter((todo) =>
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }

    const filteredTodos = getFilteredData()

    return (
        <div className='TodoList'>
            <h4>Todo List🌱</h4>
            <input
                type="text"
                placeholder='검색어를 입력하세요'
                value={search}
                onChange={onChangeSearch}
            />
            <div className="todos-wrapper">
                {filteredTodos.map((todo) => {
                    return (
                        <TodoItem
                        onUpdate={onUpdate}
                            {...todo}
                            key={todo.id}
                            onDelete={onDelete}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList