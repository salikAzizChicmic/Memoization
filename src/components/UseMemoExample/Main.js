/*
Think of memoization as caching a value so that it does not need to be recalculated.

The useMemo Hook only runs when one of its dependencies update.

This can improve performance.

The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function. You can learn more about useCallback in the useCallback chapter.


# Explanation

To fix this performance issue, we can use the useMemo Hook to memoize the expensiveCalculation function. This will cause the function to only run when needed.

We can wrap the expensive function call with useMemo.

The useMemoHook accepts a second parameter to declare dependencies. The expensive function will only run when its dependencies have changed.

In the following example, the expensive function will only run when count is changed and not when todo's are added.

*/
import React, { useMemo, useState } from 'react'
import { Button, Text, View } from 'react-native'

const Main = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const calculation=useMemo(()=>expensiveCalculation(count),[count])

    const inc = () => {
        setCount((c)=>c+1)
    }

    const addTodos = () => {
        setTodos([...todos,"New Todos"])
    }

  return (
      <View>
          {todos.map((ele, ind) => {
                return <Text key={ind}>{ ele}</Text>
          })}
          <Button onPress={addTodos} title='Add todos'/>
          <Text>{ ""+count}</Text>
          <Button onPress={inc} title='Increment +' />
          <Text>Expensive calculation</Text>
          <Text>{ ""+calculation}</Text>
    </View>
  )
}

const expensiveCalculation = (num) => {
    for (let i = 0; i < 100000; i++){
        num += i;
    }
    return num;
}

export default Main