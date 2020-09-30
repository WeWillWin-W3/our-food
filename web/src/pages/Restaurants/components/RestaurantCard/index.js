import React from 'react'

import { Card, CardAvatar, CardPrincipal, CardTitle, CardSubTitle, CardDescription } from './styled'

export const RestaurantCard = () => (
    <Card>
        <CardAvatar src="https://via.placeholder.com/80" alt="Main logo" />
        <CardPrincipal>
            <CardTitle>Cozinha da Maria</CardTitle>
            <CardSubTitle>Brasileira</CardSubTitle>
            <CardDescription>Entrega grátis</CardDescription>
        </CardPrincipal>
    </Card>
)
