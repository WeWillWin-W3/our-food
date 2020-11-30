import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

import { DashboardTemplate } from '../../components/DashboardTemplate'
import { Form, HorizontalAlign, InputHeader, Input, InputBox } from './styled'
import { Button } from '../../../../components/Button'

import { useAPI } from '../../../../providers/APIProvider'

export const DashboardCreateFood = () => {
    const API = useAPI()
    const history = useHistory()

    const [formState, setFormState] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    })
    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const { name, description, category, price } = formState

    console.log(API)

    const onFormSubmited = async (event) => {
        try {
            event.preventDefault()
            // TODO: pegar id do restaurante do state
            const {authToken} = API
            const restaurantId = 1
            const food = {name, description, category, price: Number(price)}            
            await API.createFood(food, restaurantId, authToken)
            goToFindFoodPage()
        } catch (error) {
            alert('Ops, não foi possível realizar a operação.')
        }
    }

    const onCancelButtonClicked = () => {
        goToFindFoodPage()
    }

    const goToFindFoodPage = () => {
        history.push('/dashboard/foods')
    }

    return (
        <DashboardTemplate title="Cadastrar comida">
            <Form onSubmit={onFormSubmited}>
                <InputHeader>
                    Nome
                    <InputBox>
                        <Input
                            placeholder="Ex. Pizza de calabresa com pimenta"
                            value={name}
                            required={true}
                            onChange={setFormFieldWithEvent('name')}/>
                    </InputBox>
                </InputHeader>
                <InputHeader>
                    Descrição
                    <InputBox>
                        <Input
                            placeholder="Ex. Molho de tomate, calabresa, milho, cebola."
                            value={description}
                            required={true}
                            onChange={setFormFieldWithEvent('description')}/>
                    </InputBox>
                </InputHeader>
                <HorizontalAlign>
                    <InputHeader style={{ width: '100%', marginRight: 20 }}>
                        Categoria
                        <InputBox>
                            <Input
                                placeholder="Ex. Pizza"
                                value={category}
                                required={true}
                                onChange={setFormFieldWithEvent('category')}/>
                        </InputBox>
                    </InputHeader>
                    <InputHeader style={{ width: '100%', marginLeft: 20 }}>
                        Preço
                        <InputBox>
                            <Input
                                placeholder="Ex. 60,00"
                                type="number"
                                value={price}
                                required={true}
                                onChange={setFormFieldWithEvent('price')}/>
                        </InputBox>
                    </InputHeader>
                </HorizontalAlign>
                <HorizontalAlign>
                    <Button type="button" full style={{ marginTop: 40, marginRight: 20 }} onClick={onCancelButtonClicked}>
                        Cancelar
                    </Button>
                    <Button type="submit" full style={{ marginTop: 40, marginLeft: 20 }}>
                        Cadastrar
                    </Button>
                </HorizontalAlign>
            </Form>
        </DashboardTemplate>
    )
}
