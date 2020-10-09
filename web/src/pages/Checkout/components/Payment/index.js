import React from 'react'

import { Box, Input, InputBox } from './styled'

export const Payment = () => (
    <Box>
        <InputBox>
            <Input placeholder='Número do cartão' />
        </InputBox>
        <InputBox>
            <Input placeholder='Validade' />
        </InputBox>
        <InputBox>
            <Input placeholder='CVV' />
        </InputBox>
        <InputBox>
            <Input placeholder='Nome do titular' />
        </InputBox>
        <InputBox>
            <Input placeholder='CPF/CNPJ do titular' />
        </InputBox>
    </Box>
)