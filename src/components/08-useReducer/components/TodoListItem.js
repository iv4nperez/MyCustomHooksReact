import React from 'react'

export const TodoListItem = ( { item  , i, handleDelete, handleToggle }) => {
    return (
        <li 
            key={ item.id } 
            className="list-group-item"
        > 
            <p 
                className={ `${item.done && 'complete'} cursor` }
                onClick={ () => { handleToggle( item.id ) } }
            >
                { i + 1 }. { item.desc } 
            </p>
            <button 
                onClick={ ()=> { handleDelete( item.id )  } } 
                className="btn btn-danger"
            >
                Borrar
            </button>
        </li>
    )
}
