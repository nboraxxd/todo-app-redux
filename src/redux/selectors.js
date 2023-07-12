import { createSelector } from '@reduxjs/toolkit'

export const todoListSelector = (state) => state.todoList
export const searchTextSelector = (state) => state.filters.search
export const filterByStatusSelector = (state) => state.filters.status
export const filterByPrioritySelector = (state) => state.filters.priorities

export const todoListRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterByStatusSelector,
  filterByPrioritySelector,
  (todoList, searchText, status, priority) => {
    const _todoListRemaining = todoList.filter((todoItem) => {
      return (
        todoItem.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (status === 'All' || todoItem.completed === (status === 'Completed'))
      )
    })

    return _todoListRemaining.filter(
      (item) => priority.length === 0 || priority.includes(item.priority)
    )
  }
)
