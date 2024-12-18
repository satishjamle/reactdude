import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { User } from './component/User';
import { Challeange } from './component/Challeange';
import { Attribute } from './component/Attribute';
import { DateComponents } from './component/DateComponents';
import { Allfile } from './Allfile';
import { Youtuber } from './component/Youtuber';
import { Calc } from './component/Calc';
import { Manage } from './component/Netflix/Manage';
import { Move } from './component/Cardbox/Move';
import { Netflix } from './component/conditionnetflix/Netflix';
import { Amazon } from './component/conditionnetflix/Amazon';
import { Slotmachine } from './component/Slotmachine';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <User/> */}
    {/* <Challeange/> */}
    {/* <Attribute/> */}
    {/* <DateComponents /> */}
    {/* <Allfile/> */}
    {/* <Youtuber/> */}
    {/* <Calc/> */}
    {/* <Manage/> */}
    {/* <Move/> */}
    {/* <Netflix/> */}
    {/* <Amazon/> */}
    {/* <Slotmachine/> */}
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
