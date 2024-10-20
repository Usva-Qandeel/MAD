import React from 'react'
import { Button } from 'react-native'
import { useContext } from 'react'
import { counterContext } from '../context/context'
export default function myButton(props) {
   const counter=useContext(counterContext) 
  return (
   
   <Button title={counter}></Button>
  )
}
