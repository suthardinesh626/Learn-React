import React from 'react'



function Navbar(props) {

  return props.name.map(
    (name) => <h1>hello {name} </h1>
  )

  
}

export default Navbar