import React from 'react'
import developer,{ program, myfav, myGame}  from './Developer';


export const Youtuber = () => {
  return (
    <>
    <ol>
        <li> satish jamle</li>
        <li>{developer}</li>
        <li>{ program}</li>
        <li>{myfav()}</li>
        <li>{myGame()}</li>
    </ol>
    
    </>
  )
}




// second type is very useful

// import React from 'react';
// import * as ques from './Developer';  // Import everything as `ques`

// export const Youtuber = () => {
//   return (
//     <>
//       <ol>
//         <li>Satish Jamle</li>
//         <li>{ques.default}</li> {/* Now it works */}
//         <li>{ques.program}</li>
//         <li>{ques.myfav()}</li>
//         <li>{ques.myGame()}</li>
//       </ol>
//     </>
//   );
// };

