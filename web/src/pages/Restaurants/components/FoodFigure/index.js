import React from 'react'

import { FoodFigure, FoodFigureImage, FoodFigureName } from './styled'

export default function RestaurantCard({ name, src }) {
    return (
        <FoodFigure>
            <FoodFigureImage alt="Brasileira" src="https://via.placeholder.com/100" />
            <FoodFigureName>Brasileira</FoodFigureName>
        </FoodFigure>
    )
}
