import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWithCustomHook = () => {

    const  [ fromValues , handleInputChange ] = useForm({
        name:'',
        email:'',
        password:''
    });

    const { name, email , password } = fromValues;

    useEffect(() => {

        console.log('email cambop');
    
    }, [ email ]);


    const handleSutmit = (e) => {
        e.preventDefault();
        console.log( fromValues );
    }


    return (
        <form onSubmit={ handleSutmit } >
            <h1>FormWithCustomHook</h1>
            <hr/>

            <div className="form-group" >   
                <input
                    type="text" 
                    name="name"
                    className="form-control"
                    placeholder="tu nombre"
                    autoComplete="off"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group" >   
                <input
                    type="text" 
                    name="email"
                    className="form-control"
                    placeholder="email@gmail.com"
                    autoComplete="off"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            <div className="form-group" >   
                <input
                    type="password" 
                    name="password"
                    className="form-control"
                    placeholder="*****"
                    value={ password }
                    onChange={ handleInputChange }
                />
            </div>
            <button  type="submit"  className="btn btn-primary" >
                Guardar
                </button>
        
        </form>
    )
}
