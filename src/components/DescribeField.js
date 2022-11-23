import React,{useContext} from 'react'
import '../css/describe-field.css';
import {CelebContext} from './CelebList';



export default function DescribeField({person}) {
  const currentYr = new Date().getFullYear();
  const{ id, dob, gender, country, description } = person
  const {edit,setEdit,handleEdit,handleDelete}=useContext(CelebContext)


return (
  <>
    {edit ? (
      <>
        
        <div className="itemMiddle">
          <div className="mid">
            <div>
              <input type={Number} value={currentYr - dob.slice(0, 4)} />
            </div>
            <div>
              <input value={gender} />
            </div>
            <div>
              <input value={country} />
            </div>
          </div>
          <textarea value={description} />
        </div>
        <div className="buttonContainer">
          <button className="btn edit" onClick={() => {handleEdit()}}>
            save
          </button>
          <button className="btn delete" onClick={() => setEdit(!edit)}>
            cancel
          </button>
          
        </div>
      </>
    ) : (
      <>
        <div className="itemMiddle">
          <div className="mid">
            <div>{currentYr - dob.slice(0, 4)}</div>
            <div>{gender}</div>
            <div>{country}</div>
          </div>
          {description}
        </div>
        <div className="buttonContainer">
          
          <button className="btn edit" onClick={() => setEdit(!edit)}>
            edit
          </button>
          <button className="btn delete" onClick={() => handleDelete(id)}>
            delete
          </button>
          
        </div>
      </>
    )}
  </>
);
}