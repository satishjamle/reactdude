import React from "react";
import { Card } from "./Card";
import Sdata from "./Sdata";

// console.log( Sdata[0].imgsrc)

//  third type --------difine
// function ncard(value){
//     return (
//         <Card
//         imgsrc={value.imgsrc}
//         title= {value.title}
//         sname= {value.sname}
//         link= {value.link}
//         />
//     );

// }

export const Move = () => {
  return (
    <>
      <h1 className="heading"> List of top 5 netflix series in 2020</h1>

      {/* {Sdata.map(ncard)} */}
      {Sdata.map((value, index) => {
        console.log(index);

        return (
          <Card
            key={value.id}
            imgsrc={value.imgsrc}
            title={value.title}
            sname={value.sname}
            link={value.link}
          />
        );
      })}

      {/* -----second tpye difind ------*/}

      {/* <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      /> */}

      {/* <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      />


       <Card
       imgsrc={Sdata[1].imgsrc}
       title= {Sdata[1].title}
       sname= {Sdata[1].sname}
       link=  {Sdata[1].link}
        
      />
      <Card
        imgsrc= {Sdata[3].imgsrc}
        title=  {Sdata[3].title}
        sname=  {Sdata[3].sname}
        link=   {Sdata[3].link}
      />
    

      <Card
        imgsrc={Sdata[4].imgsrc}
        title= {Sdata[4].title}
        sname= {Sdata[4].sname}
        link=  {Sdata[4].link}
      />  */}
    </>
  );
};
