/*
    Using memo will cause React to skip rendering a component if its props have not changed.
*/
import React, { memo, useState } from 'react'
import { Button, Text, View,Alert } from 'react-native'
import Todos from './Todos'

const Main = () => {
    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState(["Todos 1","Todos 2"])
    
    const inc = () => {
        setCount((c)=>c+1)
    }
  return (
      <View>
          <Todos todos={todos} />
          <Text>{ ""+count }</Text>
          <Button onPress={inc} title='Increment +'/>
      </View>
  )
}

export default Main