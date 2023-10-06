import React, { memo } from 'react'
import { Button, Text } from 'react-native'

const Todos = ({todos,addtodo}) => {
  return (
      <>
          {todos.map((ele, ind) => {
              return <Text key={ind}>{ ele }</Text>
          })}
          <Button onPress={addtodo} title='Add To do'/>
    </>
  )
}

export default memo(Todos)