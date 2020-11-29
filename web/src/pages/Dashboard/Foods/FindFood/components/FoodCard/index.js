import React from 'react'

import { Card, CardAvatar, CardPrincipal, CardTitle, CardSubTitle, CardDescription } from './styled'

export function FoodCard({name, category, price}) {
    return (
        <Card>
            <CardAvatar src="https://via.placeholder.com/80" alt="Main logo" />
            <CardPrincipal>
                <CardTitle>{name}</CardTitle>
                <CardSubTitle>{category}</CardSubTitle>
                <CardDescription>R$ {price}</CardDescription>
            </CardPrincipal>
        </Card>
    )
}
