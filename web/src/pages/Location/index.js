import React from 'react'

import { InputHeader, Main, Input, InputBox, Button } from './styled'

import { Card } from '../../components/Card'

export const Location = () => {

    return (
        <>
            <Main>
                <Card title="Localização">
                    <InputHeader style={{ marginTop: "52px" }}>
                        Rua
                        <InputBox>
                            <Input placeholder="Digite o nome da rua aqui" />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Número
                        <InputBox>
                            <Input placeholder="Digite o número da residência aqui" />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Bairro
                        <InputBox>
                            <Input placeholder="Digite seu bairro aqui"/>
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Complemento
                        <InputBox>
                            <Input />
                        </InputBox>
                    </InputHeader>
                    <Button>
                        Cadastrar localização
                    </Button>
                </Card>
            </Main>
        </>
    )
}