import React from 'react';
import './card.style.css'
export const Card=(props) => (
<div className='card-container'>
<img
    alt={`Monster ${props.monsters.id}`}
    // eslint-disable-next-line no-template-curly-in-string
    src={`https://robohash.org/${props.monsters.id}?set=set4&size=180x180`}
/>
<h2> {props.monsters.name}</h2>
</div>

)