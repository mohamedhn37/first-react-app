import React, { useState } from "react";
import Student from "./Component/Student";




const App = () => {
  const [count,setCount] = useState(0);
  const [students,setStudents] = useState(
    [
      {
        name: "Ayoub RZ",
        profil: "Mobile Developer"
      },
      {
        name: "Mohamed MH",
        profil: "FullStack Developer"
      },
      {
        name: "Adnan DB",
        profil: "Oracle Developer"
      },
      {
        name: "Fatima Ms",
        profil: "Frontend Developer"
      },
    ],
  )
  

  function Increment(){
    setCount ( count + 1 )
  }
  function Decrement(){
    setCount( count - 1 )
  }
  return (
    <>
      <h1>Bienvenue à mon site</h1>
      <div className="counter">
        <h3>{count}</h3>
        <button className="increment" onClick={Increment}>Increment</button>
        <button className="decrement" onClick={Decrement}>Decrement</button>
      </div>
    {
      students.map((student,key)=>{
        return <Student key={key} name={student.name} profil={student.profil} age={count}>il ya pas de state </Student>
      })
    }
  </>
  )
}




export default App;