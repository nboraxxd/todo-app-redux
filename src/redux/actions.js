export const addTodo = (data) => {
  return {
    type: 'todoList/addTodo',
    payload: data,
  }
}

export const changeTodoStatus = (id) => {
  return {
    type: 'todoList/changeTodoStatus',
    payload: id,
  }
}

export const searchTodo = (text) => {
  return {
    type: 'filters/searchTodo',
    payload: text,
  }
}

export const filterTodoByStatus = (status) => {
  return {
    type: 'filters/statusTodo',
    payload: status,
  }
}

export const filterTodoByPriority = (priorityList) => {
  return {
    type: 'filters/priorityTodo',
    payload: priorityList,
  }
}
