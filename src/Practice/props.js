import React from 'react'
const Greet=props =>{
    console.log(props)
    return <h1 className={props.class}>Hello {props.name}</h1>
}
export default Greet