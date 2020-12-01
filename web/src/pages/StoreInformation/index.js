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
        location: '',
        description: '',
        category: ''
    })

    const { storeName, cnpj, phoneNumber, location, description, category } = formState

    const API = useAPI()
    const history = useHistory()

    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const onSignButtonClicked = async () => {
        try {
            await API.createRestaurant({ storeName, cnpj, phoneNumber, location, description, category })
            history.push('/dashboard')
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
                    <InputHeader>
                        Categoria
                        <InputBox>
                            <Input placeholder="Ex: Pizzaria, Comida Japonesa, etc" value={category} onChange={setFormFieldWithEvent('category')} />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Descrição
                        <InputBox>
                            <Input placeholder="Descrição do restaurante" value={description} onChange={setFormFieldWithEvent('description')} />
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