import React from 'react'

import { InputHeader, Main, Input, InputBox } from './styled'

import { Card } from '../../components/Card'

import { Button } from '../../components/Button'

export const StoreInformation = () => {
    return (
        <>
            <Main>
                <Card title="Informações da loja">
                    <InputHeader style={{ marginTop: "52px" }}>
                        Nome da loja
                        <InputBox>
                            <Input placeholder="Digite o nome da loja aqui" />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        CNPJ
                        <InputBox>
                            <Input placeholder="Digite o CNPJ da loja aqui" />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Telefone da loja
                        <InputBox>
                            <Input placeholder="Digite o telefone da loja aqui" />
                        </InputBox>
                    </InputHeader>
                    <Button full style={{ marginTop: 46 }}>
                        Continuar
                    </Button>
                </Card>
            </Main>
        </>
    )
}