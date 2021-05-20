import React from 'react'

function Skills (props) {
  const lists = props.lists
  const listItem = lists.map((list) =>

    <li key={list.toString()}>{list}</li>
  )
  return (
    <ul>
      <h3>{props.name}</h3>
      {listItem}
    </ul>
  )
}

export default Skills
