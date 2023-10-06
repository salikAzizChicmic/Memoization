/*
    To fix this, we can use the useCallback hook to prevent the function from being recreated unless necessary.

    Use the useCallback Hook to prevent the Todos component from re-rendering needlessly:
*/
import React, { useCallback, useState } from 'react'
import { Button,Text, TextInput } from 'react-native'
import Todos from './Todos';

const Main = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    const [todoText,setTodoText] = useState("")

    const addtodo =useCallback(()=>setTodos((t)=>[...t,todoText]),[todos])
    const inc = () => {
        setCount((c)=>c+1)
    }
  return (
      <>
          <Todos todos={ todos} addtodo={addtodo} />
          <TextInput value={todoText} onChangeText={(text)=>setTodoText(text)} placeholder='Enter to do list item' style={{borderWidth:1,marginHorizontal:10,marginVertical:10,borderRadius:20}} />
          
          <Text>{ ""+count}</Text>
       <Button onPress={inc} title='Increment' />   
    </>
  )
}

export default Main