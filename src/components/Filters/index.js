import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterTodoByPriority, filterTodoByStatus, searchTodo } from '../../redux/actions'

const { Search } = Input

export default function Filters() {
  const [searchText, setSearchText] = useState()
  const [status, setStatus] = useState('All')
  const [_priorityList, _setPriorityList] = useState([])
  const dispatch = useDispatch()

  const handleOnChangeSearchText = (e) => {
    setSearchText(e.target.value)
    dispatch(searchTodo(e.target.value))
  }

  const handleOnChangeStatus = (e) => {
    setStatus(e.target.value)
    dispatch(filterTodoByStatus(e.target.value))
  }

  const handleOnChangePriority = (priorityList) => {
    _setPriorityList(priorityList)
    dispatch(filterTodoByPriority(priorityList))
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          placeholder="input search text"
          value={searchText}
          onChange={handleOnChangeSearchText}
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group status={status} onChange={handleOnChangeStatus}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          value={_priorityList}
          onChange={handleOnChangePriority}
          style={{ width: '100%' }}
        >
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
      </Col>
    </Row>
  )
}
