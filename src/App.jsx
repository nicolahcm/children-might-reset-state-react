import React, { useState } from 'react';


const SubC2 = () => {

  const [val2, setVal2] = useState("red")

  const handleClick = (e) => {
    setVal2(val2 === "red" ? "blue" : "red")
  }

  return (
    <div className={`subC2 ${val2}`} >

      SUBC2: THIS STARTS WITH RED
      <button onClick={handleClick} >
        Change Color (Blue or Red) of subC2
      </button>
    </div>
  )
}

const SubC1 = () => {

  const [val1, setVal1] = useState("green")

  const handleClick = (e) => {
    setVal1(val1 === "green" ? "yellow" : "green")
  }

  return (
    <div className={`subC1 ${val1}`} >

      SUBC1: THIS STARTS WITH GREEN

      <button onClick={handleClick} >
        Change Color (Yellow or Green) of subC1
      </button>
    </div>
  )
}

const ConditionalRendering = () => {

  const [subc, setSubc] = useState(2)

  const handleClick = (e) => {
    setSubc(subc === 2 ? 1 : 2)
  }


  return (
    <div>

      {subc === 1 ? <SubC1 /> : <SubC2 />}

      <br /><br />
      <br /><br />
      <br /><br />

      <button onClick={handleClick} > Change Rendered SubComponent. </button>

    </div >
  )
}






const App = () => {
  return (
    <div>
      Hi World
      <div className="experiment1">

        <h2>Experiment 1</h2>
        <ConditionalRendering />

      </div>


    </div>
  );
}

export default App;
