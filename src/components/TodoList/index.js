import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../Todo'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { todoListRemainingSelector } from '../../redux/selectors'
import todoListSlice from './todoListSlice'

export default function TodoList() {
  const [todoInput, setTodoInput] = useState()
  const [todoPriority, setTodoPriority] = useState('Medium')

  const dispatch = useDispatch()
  const todoList = useSelector(todoListRemainingSelector)

  const handleAddButtonClick = () => {
    if (!todoInput) return

    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoInput,
        completed: false,
        priority: todoPriority,
      })
    )
    setTodoInput()
    setTodoPriority('Medium')
  }

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todoItem) => (
          <Todo
            key={todoItem.id}
            id={todoItem.id}
            name={todoItem.name}
            priority={todoItem.priority}
            completed={todoItem.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={todoInput} onChange={(e) => setTodoInput(e.target.value)} />
          <Select value={todoPriority} onChange={(value) => setTodoPriority(value)}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button disabled={!todoInput} type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}
