import React from "react";
import { useForm } from "../../../hooks/useForm";

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description:''
    });
    

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ) return;

        const newTodo = {   
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo );

        reset();
    }

  return (
    <>
        <h4>Agregar TODO</h4>
        <hr />

        <form>
            <input
                type="text"
                name="description"
                placeholder="Aprender..."
                autoComplete="off"
                className="form-control"
                value={ description }
                onChange={ handleInputChange }
            />
            <div className="d-grid gap-2">
                <button
                    onClick={ handleSubmit }
                    type="submit"
                    className="btn btn-outline-primary mt-1 btn-block"
                >
                    Agregar
                </button>
            </div>
        </form>
    </>
  );
};