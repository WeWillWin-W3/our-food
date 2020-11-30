import React from 'react'

import { Card, CardAvatar, DeleteButton, CardPrincipal, CardTitle, CardSubTitle, CardDescription } from './styled'

export function FoodCard({id, name, category, price, onDeleteButtonClicked}) {

    const handleDeleteButtonClick = () => {
        onDeleteButtonClicked({id, name})
    }

    return (
        <Card>
            <DeleteButton onDeleteButtonClicked={handleDeleteButtonClick} />
            <CardAvatar src="https://via.placeholder.com/80" alt="Main logo" />
            <CardPrincipal>
                <CardTitle>{name}</CardTitle>
                <CardSubTitle>{category}</CardSubTitle>
                <CardDescription>R$ {price}</CardDescription>
            </CardPrincipal>
        </Card>
    )
}
