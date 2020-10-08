import React from 'react'
import { ImgPlaceholder } from '../../../../components/ImgPlaceholder'

import { 
    Card, CardPrincipal, CardNameStreet, 
    CardComplement, CardCity 
} from './styled'

export const Location = () => (
    <Card>
        <ImgPlaceholder width={80} height={80} style={{ margin: '0px 5px 0px 0px' }}/>
        <CardPrincipal>
            <CardNameStreet>Nome da rua, n°</CardNameStreet>
            <CardComplement>Complemento</CardComplement>
            <CardCity>Cidade</CardCity>
        </CardPrincipal>
    </Card>
)