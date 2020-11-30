import React from 'react'

import { FoodFigure, FoodFigureImage, FoodFigureName } from './styled'

export function FoodFigureComponent({ name, src = "https://via.placeholder.com/100", ...rest }) {
    return (
        <FoodFigure {...rest}>
            <FoodFigureImage alt={name} src={src} />
            <FoodFigureName>{name}</FoodFigureName>
        </FoodFigure>
    )
}
