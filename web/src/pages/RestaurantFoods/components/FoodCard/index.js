import React from 'react'

import { Card, CardAvatar, CardPrincipal, CardTitle, CardSubTitle, CardDescription } from './styled'

export function FoodCard() {
    return (
        <Card>
            <CardAvatar src="https://via.placeholder.com/80" alt="Main logo" />
            <CardPrincipal>
                <CardTitle>Pizza de lombo ao creme</CardTitle>
                <CardSubTitle>Pizza muito boa</CardSubTitle>
                <CardDescription>Descrição</CardDescription>
            </CardPrincipal>
        </Card>
    )
}
