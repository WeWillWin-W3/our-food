import React from 'react'

import './styles.css'

export const BestRestaurants = () => (
    <>
        <div className="card">
            <div className="card__avatar mr-2">
                <img className="card__avatar--image" alt="Avatar" src="https://via.placeholder.com/80" />
            </div>
            <div className="card__principal">
                <h4 className="card__principal--title mb-1">Cozinha da Maria</h4>
                <p className="card__principal--subtitle mb-2">Brasileira</p>
                <span className="card__principal--description">Entrega Grátis</span>
            </div>
        </div>
    </>
)
