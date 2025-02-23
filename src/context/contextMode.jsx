import { createContext, useState } from "react"

export const Mode  = createContext("light")

function ChangeMode({children}){
    const [mode,setMode]=useState("light");
    return(
        <Mode.Provider value={{mode,setMode}}>{children}</Mode.Provider>
    )
}
export default ChangeMode;