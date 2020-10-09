import React from 'react'

import {
     Page, OrderCard, CloseButton, CommentBox,
     CardHeader, HeaderTitle, HeaderSubtitle,
     HeaderPrice, OrderRestaurant, CommentHint,
     CommentTextArea, OrderOptions, OptionQuantity,
     OptionAction
} from './styled'

export const OrderFood = () => (
    <Page>
        <OrderCard>
                <CloseButton/>
                <CardHeader>
                        <HeaderTitle>Macarrão ao molho branco</HeaderTitle>
                        <HeaderSubtitle>2kg de macarrão ao molho branco, cream cheese e caviar</HeaderSubtitle>
                        <HeaderPrice>R$24,90</HeaderPrice>
                </CardHeader>
                <OrderRestaurant>
                        Restaurante Minha comida minha vida
                </OrderRestaurant>
                <CommentBox>
                        <CommentHint>Algum comentário?</CommentHint>
                        <CommentTextArea placeholder="Ex.: Tirar o branco do molho, tirar o cheese do cream, etc." />
                </CommentBox>
                <OrderOptions>
                        <OptionQuantity />
                        <OptionAction amount="R$ 28,90"  />
                </OrderOptions>
        </OrderCard>
    </Page>
)
