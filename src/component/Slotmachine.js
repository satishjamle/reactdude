import React from "react";
import SlotM from "./SlotM";

// const SlotM = (props) => {
//   //   let x = "😀";
//   //   let y = "😀";
//   //   let z = "😀";

//   let x = props.x;
//   let y = props.y;
//   let z = props.z;

//   if (x === y && y === z) {
//     return (
//       <>
//         <div className="slot_inner">
//           <h1>{x}</h1>
//           <h1>this is matching.</h1>
//           <hr />
//         </div>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <div className="slot_inner">
//           <h1>
//             {x} {y} {z}
//           </h1>
//           <h1>this is Not matching.</h1>
//           <hr />
//         </div>
//       </>
//     );
//   }
// };

export const Slotmachine = () => {
  return (
    <>
      <h1 className="Heading_style">
        🎰🎰 Welcome to{" "}
        <span style={{ fontWeight: "bold", color: "red" }}>
          Slot Machine Game{" "}
        </span>{" "}
        🎰🎰{" "}
      </h1>
      <div
        className="Heading_style"
        style={{ textTransform: "capitalize", color: "orange" }}
      >
        <SlotM x="😆" y="😆" z="😆" />
        <SlotM x="😎" y="😂" z="😎" />
        <SlotM x="🍓" y="🍓" z="🍓" />
        <SlotM x="🍌" y="🥵" z="🍌" />
      </div>
    </>
  );
};
