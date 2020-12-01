import React from 'react'

import { Card, CardAvatar, EditButton, DeleteButton, CardPrincipal, CardTitle, CardSubTitle, CardDescription } from './styled'

export function FoodCard({id, name, category, price, onEditButtonClicked, onDeleteButtonClicked}) {

    const handleEditButtonClick = () => {
        onEditButtonClicked({id})
    }
    
    const handleDeleteButtonClick = () => {
        onDeleteButtonClicked({id, name})
    }

    return (
        <Card>
            <EditButton onEditButtonClicked={handleEditButtonClick} />
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
