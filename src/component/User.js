import React from 'react'


const flname = 'satish jamle';
const role = 'developer'


export const User = () => {
  return (
    <>
    {/* <h1> my name is {flname} and my profile {role} Netflix Pick </h1> */}
    <h1>{flname + " "  + role}  </h1>
    <p> here the list of my fav 5 Natflix series</p>
    <p>my luck num ber is  {Math.random()} </p>
    <h4>ny first name is { `${flname} and my pfrofile ${role}`}</h4> 
    

    <ol>
        <li>Dark</li>
        <li>Extra curricular</li>
        <li>My holo love</li>
        <li> My first-2 webseries</li>
        <li> My Robot</li>
    </ol>
  
    
    </>
  )
}
