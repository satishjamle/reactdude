import React from "react";

const SlotM = (props) => {
  let x = props.x;
  let y = props.y;
  let z = props.z;


//  ya object destriching ke throw
// let {x,y,z} =props;

  if (x === y && y === z) {
    return (
      <>
        <div className="slot_inner">
          <h1>{x}</h1>
          <h1>this is matching.</h1>
          <hr />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="slot_inner">
          <h1>
            {x} {y} {z}
          </h1>
          <h1>this is Not matching.</h1>
          <hr />
        </div>
      </>
    );
  }
};

export default SlotM;
