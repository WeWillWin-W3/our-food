import React, { useEffect, useState } from 'react'

import { InputHeader, Main, Input, InputBox } from './styled'

import { Card } from '../../components/Card'

import { useAPI } from '../../providers/APIProvider';

import { Button } from '../../components/Button'

export const StoreInformation = () => {

    const [formState, setFormState] = useState({
        storeName: "",
        cnpj: "",
        phoneNumber: ""
    })

    const { storeName, cnpj, phoneNumber } = formState

    const API = useAPI()

    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const onSignButtonClicked = async () => await API.createRestaurant({ storeName, cnpj, phoneNumber })

    return (
        <>
            <Main>
                <Card title="Informações da loja">
                    <InputHeader style={{ marginTop: "52px" }}>
                        Nome do restaurante
                        <InputBox>
                            <Input
                                placeholder="Digite o nome da loja aqui"
                                value={storeName}
                                onChange={setFormFieldWithEvent('storeName')}
                            />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        CNPJ
                        <InputBox>
                            <Input placeholder="Digite o CNPJ da loja aqui" value={cnpj} onChange={setFormFieldWithEvent('cnpj')} />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Telefone da loja
                        <InputBox>
                            <Input placeholder="Digite o telefone da loja aqui" value={phoneNumber} onChange={setFormFieldWithEvent('phoneNumber')} />
                        </InputBox>
                    </InputHeader>
                    <Button full style={{ marginTop: 46 }} onClick={onSignButtonClicked}>
                        Continuar
                    </Button>
                </Card>
            </Main>
        </>
    )
}