import React from 'react'
import Sdata from '../Cardbox/Sdata'
import { Card } from '../Cardbox/Card'

const favSeries = 'Netflix'

const favS =()=>{

if(favSeries === 'Netflix'){

} else{
    return(
        

       <Card
       imgsrc={Sdata[1].imgsrc}
       title= {Sdata[1].title}
       sname= {Sdata[1].sname}
       link=  {Sdata[1].link}
        
      />
    )
}
}

export const Netflix = () => {
  return (
  <Card
        imgsrc= {Sdata[3].imgsrc}
        title=  {Sdata[3].title}
        sname=  {Sdata[3].sname}
        link=   {Sdata[3].link}
      />
  )
}
