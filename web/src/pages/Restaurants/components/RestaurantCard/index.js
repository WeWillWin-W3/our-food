import React from 'react'

import { Card, CardAvatar, CardPrincipal, CardTitle, CardSubTitle, CardDescription } from './styled'

export function RestaurantCard({name, category, description}) {
    return (
        <Card>
            <CardAvatar src="https://via.placeholder.com/80" alt="Main logo" />
            <CardPrincipal>
                <CardTitle>{name}</CardTitle>
                <CardSubTitle>{category}</CardSubTitle>
                <CardDescription>{description}</CardDescription>
            </CardPrincipal>
        </Card>
    )
}
