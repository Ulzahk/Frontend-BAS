import React from 'react'

import '../assets/styles/components/CardItem.scss'

export const CardItem = ({ name, url, types }) => {
  return (
    <div className={`card__container ${types[0].type.name}`}>
      <div className={`card__title ${types[0].type.name}`}>
        <h3 className='card__title--text'>{name}</h3>
      </div>
      <div className='card__image'>
        <img className='card__image--src' src={url} />
      </div>
      <div className={`card__attributes ${types[0].type.name}__attributes`}>
        <p className={`card__attributes--container ${types[0].type.name}`}>{types[0].type.name}</p>
        {types[1]
          ? <p className={`card__attributes--container ${types[1].type.name}`}>{types[1].type.name}</p>
          : <></>}
      </div>
    </div>
  )
}
