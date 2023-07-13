import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
  name: 'todoList',
  initialState: { status: 'idle', todos: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload)
    },

    toggleTodoStatus: (state, action) => {
      const currentTodo = state.todos.find((todo) => todo.id === action.payload)
      currentTodo.completed = !currentTodo.completed
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.status = 'idle'
      })
      .addCase(addNewTodo.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload)
        state.status = 'idle'
      })
      .addCase(updateTodoStatus.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(updateTodoStatus.fulfilled, (state, action) => {
        const currentTodo = state.todos.find((todo) => todo.id === action.payload.id)
        currentTodo.completed = action.payload.completed
        state.status = 'idle'
      })
  },
})

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const res = await fetch('/api/todos')
  const data = await res.json()

  return data.todos
})

export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (newTodo) => {
  const res = await fetch('/api/todos', {
    method: 'POST',
    body: JSON.stringify(newTodo),
  })
  const data = await res.json()
  console.log('🥴 ~ addNewTodo ~ res:', data)

  return data.todos
})

export const updateTodoStatus = createAsyncThunk('todos/updateTodoStatus', async (currentTodo) => {
  const res = await fetch('/api/updateTodo', {
    method: 'POST',
    body: JSON.stringify(currentTodo),
  })
  const data = await res.json()
  console.log('🥴 ~ updateTodoStatus ~ dataUpdated:', data.todos)

  return data.todos
})

export default todoSlice

// export function addTodos(todo) {
//   return function addTodosThunk(dispatch, getState) {
//     console.log('[addTodoThunk]', getState())
//     console.log(todo)
//     // custom payload
//     todo.name = 'Bao test cho hong phai Tung test'
//     dispatch(todoSlice.actions.addTodo(todo))

//     console.log('[addTodoThunk after]', getState())
//   }
// }
