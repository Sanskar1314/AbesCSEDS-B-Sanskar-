import React,{ useState } from 'react'

function Count1() {
    const[count,setCount]=useState(0);
    function increement(){
        setCount(count+1);
    }
    function decreement(){
        setCount(count-1);
    }
  return (
    <div>
        <button onClick={increement}>+</button>
        <span>{count}</span>
        <button onClick={decreement}>-</button>
    </div>
  )
}

export default Count1