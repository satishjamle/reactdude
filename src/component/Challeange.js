import React from 'react';


const name = 'satish';
const CurrDate = new Date().toLocaleDateString();
const CurrTime = new Date().toLocaleTimeString();




export const Challeange = () => {
  return (
    <>
    <h1>hello  my name is {name}</h1>
    <p> Current Date is = {CurrDate}</p>
    <p>Current time is = {CurrTime}</p>



    </>
  )

}
