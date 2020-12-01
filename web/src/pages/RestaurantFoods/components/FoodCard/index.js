import React from 'react'

import { Card, CardAvatar, CardPrincipal, CardTitle, CardSubTitle, CardDescription } from './styled'

export function FoodCard({ name, category, price, onFoodCardClicked, description }) {
    return (
        <Card onClick={onFoodCardClicked}>
            <CardAvatar src="https://via.placeholder.com/80" alt="Main logo" />
            <CardPrincipal>
                <CardTitle>{name}</CardTitle>
                <CardSubTitle>{category}</CardSubTitle>
                <CardSubTitle>R${price.toFixed(2)}</CardSubTitle>
                <CardDescription>{description}</CardDescription>
            </CardPrincipal>
        </Card>
    )
}
