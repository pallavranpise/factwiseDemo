import React, { useLayoutEffect } from 'react'
import usersData from "../celebrities.json"
import { useState ,useEffect} from 'react'
import CelebItem from './CelebItem'
import '../css/celeb-list.css';

const LOCAL_STORAGE_KEY = 'reactceleblist.celebs'
export const CelebContext = React.createContext();

export default function CelebList() {

  const [celebs,setCelebs] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || usersData)
  const [edit, setEdit] =useState(false)
console.log(celebs) 



  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(celebs))
  }, [celebs])
 
  function handleDelete(id){
    setCelebs(celebs.filter(each=>each.id !==id))
  }

  function handleEdit(id,celeb){
      const newCelebs = [...celebs]
      const index = newCelebs.findIndex(c=>c.id===id)
      newCelebs[index] = celeb
      // console.log(newCelebs)
      setCelebs(newCelebs)
      setEdit(!edit)
  }


  const celebContextValue = {
    handleDelete,
    handleEdit
  }


  return (
    <CelebContext.Provider value={celebContextValue}>
      <div className='celebList'>
        {celebs &&
          celebs.map((person) => (
            <CelebItem
              key={person.id}
              person={person}
            />
          ))}
      </div>
    </CelebContext.Provider>
  );
}
