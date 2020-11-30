import React, { useState } from 'react'

import { InputHeader, Main, Input, InputBox } from './styled'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

import { useAPI } from '../../providers/APIProvider'
import { useHistory } from 'react-router-dom'

export const StoreInformation = () => {
    const [formState, setFormState] = useState({
        storeName: '',
        cnpj: '',
        phoneNumber: '',
        location: ''
    })

    const { storeName, cnpj, phoneNumber, location } = formState

    const API = useAPI()
    const history = useHistory()

    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const onSignButtonClicked = async () => {
        try {
            await API.createRestaurant({ storeName, cnpj, phoneNumber, location })
            history.push('/restaurants')
        } catch (err) {
            console.log(err)
        }
    }

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
                    <InputHeader>
                        Localização
                        <InputBox>
                            <Input placeholder="Localização do restaurante" value={location} onChange={setFormFieldWithEvent('location')} />
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