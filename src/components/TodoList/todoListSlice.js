const initState = [
  {
    id: 1,
    name: 'Learn HTML',
    completed: true,
    priority: 'Low',
  },
  {
    id: 2,
    name: 'Learn CSS',
    completed: true,
    priority: 'Medium',
  },
  {
    id: 3,
    name: 'Learn Javascript',
    completed: false,
    priority: 'High',
  },
  {
    id: 4,
    name: 'Learn ReactJS',
    completed: false,
    priority: 'High',
  },
  {
    id: 5,
    name: 'Learn NodeJS',
    completed: false,
    priority: 'High',
  },
  {
    id: 6,
    name: 'Sleep',
    completed: true,
    priority: 'High',
  },
  {
    id: 7,
    name: 'Practice Skateboard',
    completed: false,
    priority: 'Medium',
  },
  {
    id: 8,
    name: 'Hang out',
    completed: true,
    priority: 'Low',
  },
]

const todoListReducer = (state = initState, action) => {
  switch (action.type) {
    case 'todoList/addTodo':
      return [...state, action.payload]

    case 'todoList/changeTodoStatus':
      return state.map((item) =>
        item.id === action.payload ? { ...item, completed: !item.completed } : item
      )

    default:
      return state
  }
}

export default todoListReducer

