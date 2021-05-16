import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useConunter } from '../../hooks/useConunter'

import '../02-useEffect/effects.css'

export const MultipleCustomHooks = () => {

    const { state:counter , increment } = useConunter(1);

    const { loading, data, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // console.log( state );
    const { author, quote } = !!data && data[0]
    
    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr/>
            {
                loading 
                ?
                    (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                :
                    (
                        <blockquote  className="blockquote text-end">
                            <p> { quote } </p>
                            <footer className="blockquote-footer"> { author } </footer>
                        </blockquote>
                    )
            }

            <button 
                onClick={ increment } 
                className="btn btn-primary"
            >
                Siguiente quote
            </button>
            
        </div>
    )
}
