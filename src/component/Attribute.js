import React from "react";
// import '../index.css'


const heading = {
  color : 'green',
  textTransform: 'uppercase',
  textAlign:'center'
};


const name = "satish";
const img = "https://picsum.photos/300/210";
const img1 = "https://picsum.photos/300/200";
const img2 = "https://picsum.photos/300/190";
const img3 = "https://picsum.photos/300/189";
const link =
  "https://www.solopress.com/blog/copywriting-typography/what-is-lorem-ipsum-and-why-is-it-used/";

export const Attribute = () => {
  return (
    <>
      {/* <h1 className="heading" contentEditable="true"> */}
      <h1 style={heading} contentEditable="true">

        {" "}
        hello my name is <span>{name}</span>
      </h1>
      <div className="img-div">
        <img src={img} alt="randomImages" />
        <img src={img1} alt="randomImages" />
        <img src={img2} alt="randomImages" />

        <a href={link} target="_lorem">
          <img src={img3} alt="randomImages" />
        </a>
      </div>
    </>
  );
};
