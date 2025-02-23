import React, { useContext, useState } from 'react'

import"./alert.css"


const AlertDev = ({open,setIsopen}) => {


if(open === false)
setTimeout(()=>{
setIsopen(true)
},4000)

return (
   <div className={`alert ${open?"made":"closed"}`} style={{backgroundColor:"rgba(163, 12, 12, 0.85)"}}>
    <strong >Field!</strong> Admine closed comments

  </div>
  )
}

export default AlertDev