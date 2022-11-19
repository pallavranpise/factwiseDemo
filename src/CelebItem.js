import React from "react";
import { useState } from "react";
export default function CelebItem(props) {
  const { person, focus, handleClick } = props;
  const { id, first, last, dob, gender, email, picture, country, description } =
    person;

  return (
    <div
      className="cardBorder padd marg "
      
      style={{
        width: "600px",
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
      onClick={handleClick}
    >
      <div style={{display:'flex',flex:'1'}}>
        <div >
          <img className="cardBorder circle marg dispInline" src={picture} />
          <h2 className=" padd marg dispInline">{first + " " + last}</h2>
        </div>
        <div
          style={
            {
              fontWeight: "lighter",
              fontSize: "90px",
              marginLeft: "1px",
            }
          }
          className={focus === id ? "up" : "down"}
        >
          &lsaquo;
        </div>
      </div>
      {focus === id && (
        <div
          className=" padd marg "
          style={{ padding: "20px 0", lineHeight: "1.6rem" }}
        >
          {description}
        </div>
      )}
    </div>
  );
}
