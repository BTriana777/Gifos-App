import { useEffect, useRef, useState } from "react" 

export const useFetch = ( url ) => {

    const isMounted = useRef(true);
    const [state, setState] = useState({ data:[], loading:true});
    
    useEffect(() => {
        return () => {
            isMounted.current = false;  
        }
    }, [])

    useEffect(() => {

        setState({ data:[], loading:true})
        
        fetch(url)
            .then( resp => resp.json())
            .then( data => {
                    setState({
                       loading: false,
                       data: data.data
                   })
            })

    }, [url])

    return state;
}


