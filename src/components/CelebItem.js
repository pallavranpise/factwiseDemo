import React from "react";
import { useState } from "react";
import CeleItem from "../css/celeb-item.css";
import DescribeField from "./DescribeField";
export default function CelebItem(props) {
  const { person, focus, handleClick } = props;
  const { id, first, last, dob, gender, picture, country, description } =
    person;
  const [edit, setEdit] = useState(false);

  const currentYr = new Date().getFullYear();
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
          <div className="icon p10" onClick={handleClick}>
            {focus === id ? "+" : "-"}
          </div>
        </div>
        {focus === id && (
          <>
            <div className="itemMiddle">
              <div className="mid">
                <DescribeField title="age">
                  {edit ? (
                    <input type={Number} value={currentYr - dob.slice(0, 4)} />
                  ) : (
                    currentYr - dob.slice(0, 4)
                  )}
                </DescribeField>
                <DescribeField title="gender">
                  {edit ? <input value={gender} /> : gender}
                </DescribeField>
                <DescribeField title="country">
                  {edit ? <input value={country} /> : country}
                </DescribeField>
              </div>

              <DescribeField title="description">
                {edit ? <textarea value={description} /> : description}
              </DescribeField>
            </div>
            <div className="buttonContainer">
              <button className="btn edit" onClick={() => setEdit(!edit)}>
                edit
              </button>
              <button className="btn delete">delete</button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
