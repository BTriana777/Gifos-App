import React from 'react'

export const Header = ({handleChangeTheme, theme}) => {
    return (
        <div className="header">
            <div className="line"></div>
            <div className="container-icon-btn">
                <img src={ theme? "/images/logo-mobile-modo-noct.svg" : "/images/logo-desktop.svg" } alt="logo-desktop" />
                <button
                    className={theme? "dark" : "light"}
                    onClick={handleChangeTheme}
                >
                    { theme? "MODO LIGHT" : "MODO DARK"}
                </button>
            </div>
        </div>
    )
}
