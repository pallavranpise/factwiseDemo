import React from 'react'
import usersData from "../celebrities.json"
import { useState ,useEffect} from 'react'
import CelebItem from './CelebItem'

const LOCAL_STORAGE_KEY = 'reactceleblist.people'


export default function CelebList() {
  
  const [focus, setFocus] = useState([])
  const [celebs,setCelebs] = useState(usersData)
  
  function handleClick(id){
    (id===focus)? setFocus(null) : setFocus(id)
  }

  function handleDelete(id){
    if(id===focus)setCelebs(celebs.filter(each=>each.id !==id))
  }

  useEffect(() => {
    const celebJSON = localStorage.getItem(LOCAL_STORAGE_KEY)
    if ((celebJSON)){
      setCelebs(JSON.parse(celebJSON))
    } 
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(usersData))
  }, [usersData])




  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
    {
      celebs && celebs.map((person)=>(
      <CelebItem 
      key={person.id}
      person={person}
      handleClick={()=>handleClick(person.id)}
      focus={focus}
      handleDelete={()=>handleDelete(person.id)}
      />))
    }      
  </div>
  )
}
