import React, { memo } from 'react'
import { Text } from 'react-native'

const Todos = ({todos}) => {
  return (
      <>
          <Text>My todos</Text>
          {todos.map((ele,ind)=> {return <Text key={ind}>{ele}</Text>})}
    </>
  )
}

export default memo(Todos)