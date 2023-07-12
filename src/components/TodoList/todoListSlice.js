import { createSlice } from '@reduxjs/toolkit'
import { initialTodoList } from '../utils/initTodoList'

export default createSlice({
  name: 'todoList',
  initialState: initialTodoList,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },

    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload)
      currentTodo.completed = !currentTodo.completed
    },
  },
})
