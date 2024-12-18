import React from 'react';

let currDate = new Date(2020,5,5,2);
currDate = currDate.getHours();

let gretting = '';

const cssStyle ={}

if(currDate >= 1 && currDate <12 ){

  gretting = 'good morning';
  cssStyle.color = 'green'

} else if(  currDate >= 12 && currDate < 19){
gretting = ' good afternoon'
  cssStyle.color = 'orange'


} else{
  gretting = ' good night'
    cssStyle.color = 'black'

}

export const DateComponents = () => {
  return (
    <>
    <div className='heading '>
    <h1> Hello sir ,  <span style={cssStyle}>{gretting}</span></h1>
    
    </div>
    </>
  )
}
