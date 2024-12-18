import React from "react";
import {add ,sub,multi,divide} from "./Metrix";



// function add(a, b) {
//   let sum = a + b;
//   return sum;
// }
// function sub(a, b) {
//   let sub = a - b;
//   return sub;
// }
// function multi(a, b) {
//   let multi = a * b;
//   return multi;
// }

// function divide(a, b) {
//   let divide = a / b;
//   return divide;
// }

export const Calc = () => {
  return (
    <>
      <h1> sum of metrix in total number</h1>
      <ul>
        <li>sum of two number {add(20, 25)}</li>
        <li>sum of two number{sub(55, 50)}</li>
        <li>sum of two number {multi(20, 10)} </li>
        <li>sum of two number {divide(20, 5)}</li>
      </ul>
    </>
  );
};
