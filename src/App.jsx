import React, { useState } from 'react';
import { useFetch } from './hook/useFetch';

import { Header } from './Header';
import { Fliter } from './Fliter';
import { AutoComplete } from './AutoComplete';
import { GIfsResp } from './GIfsResp';
import { GifsEmpty } from './GifsEmpty';
import "./index.css";

export const App = () => {
    const [theme, setTheme] = useState(false)
    const [value, setValue] = useState("")
    const [valueGit, setValueGit] = useState("")
    const [changeData, setChangeData] = useState(true)

    const key = "STWOeq9odV2jzPuCAjjZZvXMlqiwVUIe";
    const { data, loading} = useFetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${valueGit}&limit=15`);
    const { data: dataTrending} = useFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=15&rating=g`);
    const { data: dataAuto } = useFetch(`https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${value}&limit=5`);

    const handleChangeTheme = () => {
        setTheme(!theme);
    };
    const handleGetvalue = (e) => {
        setValue(e.target.innerHTML);
    };
    const handleInpuntChange = ({target}) => {
        setValue(target.value)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setValueGit(value);
        setChangeData(false)
        setValue("");
    };

    return (
        <div className={ theme? "dark back" : "back"}>
            <Header handleChangeTheme={handleChangeTheme} theme={theme}/>
            <Fliter theme={theme} handleInpuntChange={handleInpuntChange} value={value} handleSubmit={handleSubmit}/>
            { dataAuto.length > 0 && <AutoComplete dataAuto={dataAuto} theme={theme} handleGetvalue={handleGetvalue}/>}

            {changeData? <GIfsResp data={dataTrending} theme={theme} />
                :(loading? 
                    (<div className="loading-img"><img src="./images/loading.svg" alt="loading"/></div>)
                    :(data.length > 0?  
                        (<GIfsResp data={data} theme={theme} /> )
                        : (<GifsEmpty theme={theme} valueGit={valueGit} />)
                    )
                )
            }                       
        </div>
    )
}
