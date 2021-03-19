import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch']);

    return (
        <>
            <h2>GifExpertApp</h2>
            < AddCategory setCategorias={ setCategorias } />
            <hr />

            <button>Agregar</button>

            <ol>
                {
                    categorias.map( category  => (
                        <GifGrid 
                            key={ category }
                            category={ category } /> 
                    ))
                }
            </ol>
        </>
    )
}