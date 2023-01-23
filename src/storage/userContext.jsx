import { createContext } from "react";

//1 crear contexto
export const userContext= createContext({user:"anonymous"});

//4 crear provider personalizado
export function UserContextProvider(props){
    return(
        <div>
            <userContext.Provider value={{user:"Juan"}}>
            <h1>{props.children}</h1>
            </userContext.Provider>
        </div>
    )
}