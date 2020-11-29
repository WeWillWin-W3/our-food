import React, { useEffect, useState } from 'react'

import {
        Page, OrderCard, CloseButton, CommentBox,
        CardHeader, HeaderTitle, HeaderSubtitle,
        HeaderPrice, OrderRestaurant, CommentHint,
        CommentTextArea, OrderOptions, OptionQuantity,
        OptionAction
} from './styled'

import { useHistory, useLocation } from 'react-router-dom'

import { useAPI } from '../../providers/APIProvider'

export const OrderFood = () => {
        const [food, setFood] = useState({})
        const [restaurant, setRestaurant] = useState({})
        const [quantity, setQuantity] = useState(1)
        const api = useAPI()
        const history = useHistory()
        const { state } = useLocation()

        useEffect(() => {
                if (!state) {
                        return history.goBack()
                }

                setFood(state.food)
                setRestaurant(state.restaurant)
        }, [state, history])

        const onClickClose = () => history.goBack()

        const onClickOrder = () => {
                api.addFoodToBag(food, quantity)
                onClickClose()
        }

        return (
                <Page>
                        <OrderCard>
                                <CloseButton onClick={onClickClose} />
                                <CardHeader>
                                        <HeaderTitle>{food.name}</HeaderTitle>
                                        <HeaderSubtitle>{food.description}</HeaderSubtitle>
                                        <HeaderPrice>R${food.price}</HeaderPrice>
                                </CardHeader>
                                <OrderRestaurant>
                                        {restaurant.name}
                                </OrderRestaurant>
                                <CommentBox>
                                        <CommentHint>Algum comentário?</CommentHint>
                                        <CommentTextArea placeholder="Ex.: Tirar o branco do molho, tirar o cheese do cream, etc." />
                                </CommentBox>
                                <OrderOptions>
                                        <OptionQuantity
                                                onAdd={() => setQuantity(quantity + 1)}
                                                onRemove={() => setQuantity(Math.max(quantity - 1, 1))}
                                                value={quantity}
                                        />
                                        <OptionAction
                                                amount={`R$${(food.price * quantity).toFixed(2)}`}
                                                onClick={onClickOrder}
                                        />
                                </OrderOptions>
                        </OrderCard>
                </Page>
        )
}
