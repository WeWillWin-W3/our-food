import React from 'react'

import { FoodFigure, FoodFigureImage, FoodFigureName } from './styled'

export function FoodFigureComponent({ name, src }) {
    return (
        <FoodFigure>
            <FoodFigureImage alt="Brasileira" src="https://via.placeholder.com/100" />
            <FoodFigureName>Brasileira</FoodFigureName>
        </FoodFigure>
    )
}
