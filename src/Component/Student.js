import React from "react";
import "./Student.css"



export const Student = (props) => {
  return (
    <div className="student-infos">
        <div className="age"><p>{props.age}</p></div>
        <h4>{props.name}</h4>
        <p>{props.profil}</p>
        <p>{props.children}</p>
    </div>
  )
}


export default Student