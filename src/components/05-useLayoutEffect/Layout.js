import React, { useLayoutEffect, useRef, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useConunter } from '../../hooks/useConunter'

import './layout.css'

export const Layout = () => {

    const { state:counter , increment } = useConunter(1);

    const {  data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // console.log( state );
    const { quote } = !!data && data[0];

    const pTag = useRef();

    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize( pTag.current.getBoundingClientRect() );
        
    }, [ quote ])
    
    return (
        <div>
            <h1>Layout effect</h1>
            <hr/>
            
            <blockquote  className="blockquote text-end">
                <p
                    className="mb-0" 
                    ref={ pTag } 
                >
                    { quote } 
                </p>
            </blockquote>

            <pre>
                { JSON.stringify( boxSize, null, 3 ) }
            </pre>

            <button 
                onClick={ increment } 
                className="btn btn-primary"
            >
                Siguiente quote
            </button>
            
        </div>
    )
}
