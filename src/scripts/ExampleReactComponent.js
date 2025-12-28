import React, { useState } from "react";
import { Header } from "../header/Header";
import { Toggler } from "../toggler/toggler";

function ExampleReactComponent() {
  const [clickCount, setClickCount] = useState(0)

  return (
    <>
    <div className="example-react-component" onClick={() => setClickCount(prev => prev + 1)}>
      <h1>Hello from я!</h1>
      <p>Я кликнул  {clickCount} times.</p>
    
  
      
        !!!
        </div>
    <Header/>
      <Toggler/>
    </>
  )
}

export default ExampleReactComponent
