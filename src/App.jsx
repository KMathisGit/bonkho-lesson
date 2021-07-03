import React, { useState, useEffect } from 'react'
import './App.css'
import Counter from './Counter';
import Resizer from './Resizer';
import People from './People';
import "./People.css";

function App() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [image, setImage] = useState(null);
  const showResizer = counter1 < 5;

  // useEffect(() => {
  //   fetch(`https://source.unsplash.com/1600x900/?beach`).then((response) => {   
  //     setImage(response.url);
  // })  
  // }, [counter1, counter2])


  return (
    <div className="App">
      <Counter count={counter1} setCount={setCounter1} />
      <Counter count={counter2} setCount={setCounter2} />
      <h2>{counter1 + counter2}</h2>
      {/* {showResizer && <Resizer />}
      <img src={image}/> */}
      <People />
    </div>
  )
}

export default App
