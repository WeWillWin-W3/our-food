import React from 'react'

import { CardContainer, Title } from './styled'

export const Card = ({ children, title }) => (
    <CardContainer>
        <Title>
            {title}
        </Title>
        {children}
    </CardContainer>
)