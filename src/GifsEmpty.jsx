import React from 'react'

export const GifsEmpty = ({theme, valueGit}) => {
    return (
        <div className="container-gifs-empyt">
            <h3 className={!theme && "light-losiento"}>lo siento, no sé encontró nada con <span>{valueGit}</span></h3>
            <img src="./images/vision.svg" alt="" />
        </div>
    )
}
