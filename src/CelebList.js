import React from 'react'
import usersData from "./celebrities.json"
import { useState } from 'react'
import CelebItem from './CelebItem'

export default function CelebList() {
  
  const [focus, setFocus] = useState([]);
  
  function handleClick(id){
    (id===focus)? setFocus(null) : setFocus(id)
  }

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    {
      usersData && usersData.map((person)=>(
      <CelebItem 
      key={person.id}
      person={person}
      handleClick={()=>handleClick(person.id)}
      focus={focus}
      />))
    }      
  </div>
  )
}
