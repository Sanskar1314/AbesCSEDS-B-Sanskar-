import React from 'react'
import './Book.css'
import Counter from './Counter.jsx'
function Book(props) {
  return (
    <div id='book'>
        <img src="https://m.media-amazon.com/images/I/91TFnxflYXL._AC_UF1000,1000_QL80_.jpg" alt="" height={100} width={100} />
        <h1>Title:{props.Title}</h1>
        <h1>Price:{props.Price}</h1>
        <div id=''>
            <div><Counter></Counter></div>
        </div>
    </div>
  )
}

export default Book