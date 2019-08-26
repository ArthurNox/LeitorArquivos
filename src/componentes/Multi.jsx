import React from 'react'


export const Vendedor =  props => 
    <div>
        <h3>{props.nome}</h3>
        <p>{props.valor}</p>
    </div>

export const Cliente =  props => 
    <div>
        <h3>{props.nome}</h3>
        <p>{props.valor}</p>
    </div>

export const PiorVendedor =  props => 
    <div>
        <h3>{props.nome}</h3>
        <p>{props.valor}</p>
    </div>
    
export const MelhorVenda =  props => 
<div>
    <h3>{props.nome}</h3>
    <p>{props.valor}</p>
</div>