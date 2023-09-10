import { createContext,useState } from "react";





const Menucontext = createContext()

const MenuProvider =({children})=>{
    const [menu,setMenu] =useState(false)
    return(
        <Menucontext.Provider value={{menu,setMenu}}>
            {children}
        </Menucontext.Provider>
    )
}

export {Menucontext,MenuProvider}