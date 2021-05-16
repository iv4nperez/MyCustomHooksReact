import React from 'react'
import { useConunter } from '../../hooks/useConunter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useConunter(100);

    return (
        <>
            <h1>Counter with hook: { state } </h1>
            <br/>

            <button className="btn" onClick={ () => increment( 2 ) } > + 1 </button>
            <button className="btn" onClick={ reset } > Reset </button>
            <button className="btn" onClick={ () => decrement( 2 ) } > - 1 </button>

        </>
    )
}


