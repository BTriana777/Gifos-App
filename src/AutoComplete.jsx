import React from 'react'

export const AutoComplete = ({dataAuto, theme, handleGetvalue}) => {
                      
    return (
        <div className="container-autoComplete">
            <ul className={theme? "autoComplete autoComplete-dark" : "autoComplete autoComplete-light"}>
                { dataAuto.map( (data) => {
                    return <li className={theme? "suggestions suggestions-dark" :  "suggestions suggestions-light"} onClick={handleGetvalue}>{data.name}</li>
                })} 
            </ul>
            
        </div>
    )
}