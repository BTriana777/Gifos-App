import React from 'react'

export const GIfsResp = ({data, theme}) => {
    // console.log(data);
    const handleClick = () => {
        console.log(data.url);
    }

    return (
        <div className="container-gifsResp">
            <h1 className={ theme? "container-gifsResp-title-dark" : "container-gifsResp-title-light"}>Resultados de la búsqueda</h1>
            <div className="container-gifs">
                {data.map(({id, images, url}) => {
                    return <a href={url} target="_blank" rel="noreferrer"><img key={id} src={images.fixed_width_downsampled.url} alt={id}/></a>
                })}
            </div>
        </div>
    )
}               
