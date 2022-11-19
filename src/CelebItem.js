import React from 'react'
import {useState} from 'react'
export default function CelebItem({each}) {

  const [isOpen, setIsOpen] = useState(true);

  return (
   <div style={{border:"red solid 1px",margin:"10px"}}>
    <div>
    <img style={{display:'inline'}} src={each.picture}/>
    <div style={{display:'inline'}}>{each.first +" "+ each.last}</div>
    </div>
    {isOpen &&(<span>
      {each.description}
    </span>)
    }
    <button  style={{display:'inline'}} onClick={()=>setIsOpen(!isOpen)}> okay</button>
    </div>
  )
}
