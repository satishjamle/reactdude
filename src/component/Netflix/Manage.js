import React from "react";
import { Carding } from "./Carding";


// function Card(props) {
//   console.log(props);
//   return (
//      <>
//        <div className="cards">
//       <div className="card">
//           <img src={props.imgsrc} alt="myPic" className="card__img" />
//          <div className="card__info">
//          <img src={props.imgsrc} alt="myPic" className="card__img" />
//             <span className="card__category">{props.title}</span>
//            <h3 className="card__title">{props.sname} </h3>
//            <a href={props.link} target="_blnk">
//               <button>watch Now</button>
//             </a>
//           </div>
//        </div>
//        </div> 
//      </> 
//   );
// }

export const Manage = () => {
  return (
    <>
   <h1 className="heading"> List of top 5 netflix series in 2020</h1>
      <Carding
        imgsrc="https://m.media-amazon.com/images/I/81mIVtv05TL._AC_UF1000,1000_QL80_.jpg"
        title="A NetFlix Original Series"
        sname="Dark"
        link="https://tinyurl.com/ye27e9ek"
      />

      <Carding
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK40NgXqDt6ORfQYsqFJyLf_fk-vfg3NbiAw&s"
        title="A NetFlix Original Series"
        sname="Extra Curricular"
        link="httphttps://www.netflix.com/in/title/80990668s://tinyurl.com/ye27e9ek"
      />
      <Carding
        imgsrc="https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Extracurricular_2020.jpg/220px-Extracurricular_2020.jpg"
        title="A NetFlix Original Series"
        sname="Stranger"
        link="https://www.netflix.com/in/title/80057281https://tinyurl.com/ye27e9ek"
      />
      <Carding
        imgsrc="https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQUQXspCa7-ML9jU-MDmoKbzUZVyO0y9R8zEemkDXTDn0opcGGT7lBRc6pBuirUOGyjNgelGidVH4nJN5HnUkXCuWlv2c0A-52tFG7r5LCLBc7LJc-L5YB0kPe0e8KaMluyhxv_6BXrMDfQ9jLifB-qtqBGQ.jpg?r=0c4"
        title="A NetFlix Original Series"
        sname="stranger Thing"
        link="https://www.netflix.com/tudum/articles/the-title-of-stranger-things-season-5-episode-1-revealed"
      />

<Carding
        imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlfMGue2Z7O4hmCXiY9sBL1n7U63_iqhLlRQ&s"
        title="A NetFlix Original Series"
        sname="stranger Thing"
        link="https://www.netflix.com/in/"
      />
    </>
  );
};
