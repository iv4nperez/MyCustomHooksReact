import React, { useState } from 'react'
import { useConunter } from '../../hooks/useConunter'
import { Small } from './Small';

import '../02-useEffect/effects.css'

export const Memorize = () => {

    const { state:counter, increment } = useConunter( 10 );
    const [show, setShow] = useState( true );

    return (
        <div>
            <h1>Counter: <Small value={ counter } /> </h1>
            <hr/>

            <button
                className="btn btn-primary"
                onClick={ increment }
            >
                + 1
            </button>

            <button
                className="btn btn-outline-primary"
                onClick={ () => { 
                    setShow( !show ) 
                }}
            >
                Show/Hide { JSON.stringify( show ) }
            </button>

        </div>
    )
}
