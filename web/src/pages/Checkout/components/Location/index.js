import React from 'react'
import { ImgPlaceholder } from '../../../../components/ImgPlaceholder'

import {
    Card, CardPrincipal,
    // CardNameStreet, CardCity,
    CardComplement
} from './styled'

export const Location = ({ location = "Faça login para selecionar o endereço" }) => (
    <Card>
        <ImgPlaceholder width={80} height={80} style={{ margin: '0px 5px 0px 0px' }} />
        <CardPrincipal>
            <CardComplement>{location}</CardComplement>
        </CardPrincipal>
    </Card>
)