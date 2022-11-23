import React, { useState } from "react";
import DescribeField from "./DescribeField";
export default function CelebItem(props) {
  const { person} = props;
  const { id, first, last, picture} = person;
  const [focus, setFocus] = useState(null)
  
  function handleFocus(id){
    (id===focus)? setFocus(null) : setFocus(id);
  }
  return (
    <>
      <div className="itemWrapper border p15">
        <div className="itemUpper ">
          <div className="imgContainer ">
            <img
              className="circle border m10 "
              src={picture}
              alt={first + " " + last + " image"}
            />
            <div className="title m10">{first + " " + last}</div>
          </div>
          <div className="icon p10" onClick={()=>handleFocus(id)}>
            {focus===id? "+" : "-"}
          </div>
        </div>
        <>
        {focus===id && <DescribeField person={person}/>}
        </>
      </div>
    </>
  );
}
