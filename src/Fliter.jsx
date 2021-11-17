import React from 'react'

export const Fliter = ({theme, handleInpuntChange, value, handleSubmit}) => {
    return (
        <div className="container-filter">
            <h1 className={ theme? "title-filter-dark" : "title-filter-light"}>¡Inspirate y busca los mejores <span className="bold">GIFS!</span></h1>
            <img src="./images/ilustra_header.svg" alt="" />
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Busca gifs"
                    value={value}
                    onChange={handleInpuntChange}
                    className={theme? "filter-input-dark" : "filter-input-light"}
                />
                <div className={theme? "filter-input-dark container-input-img" : "filter-input-light container-input-img"} onClick={handleSubmit}>
                    <img src="./images/icon-search-mod-noc.svg" alt=""/>
                </div>
            </form>
        </div>
    )
}
