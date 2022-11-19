import React from 'react'
import usersData from "./celebrities.json"
import { useState } from 'react'
import CelebItem from './CelebItem'

export default function CelebList() {
  const [state,setstate] = useState(usersData)
  
  
  return (
    <div>
    {
      usersData && usersData.map((each)=>(
      <CelebItem 
      key={each.id}
      each={each}
      />))
    }      
  </div>
  )
}
