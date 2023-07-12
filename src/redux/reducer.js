import { combineReducers } from 'redux'
import filterReducer from '../components/Filters/FilterSlice'
import todoListReducer from '../components/TodoList/TodoListSlice'

const rootReducer = combineReducers({
  filters: filterReducer,
  todoList: todoListReducer,
})
export default rootReducer

// const rootReducer = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: todoListReducer(state.todoList, action),
//   }
// }
// export default rootReducer

// const initState = {
//   filters: {
//     search: '',
//     status: 'All',
//     priority: [],
//   },
//   todoList: [
//     {
//       id: 1,
//       name: 'Learn HTML',
//       completed: true,
//       priority: 'Low',
//     },
//     {
//       id: 2,
//       name: 'Learn CSS',
//       completed: true,
//       priority: 'Medium',
//     },
//     {
//       id: 3,
//       name: 'Learn Javascript',
//       completed: false,
//       priority: 'High',
//     },
//     {
//       id: 4,
//       name: 'Learn ReactJS',
//       completed: false,
//       priority: 'High',
//     },
//     {
//       id: 5,
//       name: 'Learn NodeJS',
//       completed: false,
//       priority: 'High',
//     },
//     {
//       id: 6,
//       name: 'Sleep',
//       completed: true,
//       priority: 'High',
//     },
//     {
//       id: 7,
//       name: 'Practice Skateboard',
//       completed: false,
//       priority: 'Medium',
//     },
//     {
//       id: 8,
//       name: 'Hang out',
//       completed: true,
//       priority: 'Low',
//     },
//   ],
// }

// const rootReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return { ...state, todoList: [...state.todoList, action.payload] }

//     case 'filters/searchTodo':
//       return {
//         ...state,
//         filters: { ...state.filters, search: action.payload },
//       }

//     default:
//       return state
//   }
// }
// export default rootReducer
