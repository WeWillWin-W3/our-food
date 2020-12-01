import React, { useState, useEffect, useCallback } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { DashboardTemplate } from '../../components/DashboardTemplate'
import { Form, HorizontalAlign, InputHeader, Input, InputBox } from './styled'
import { Button } from '../../../../components/Button'

import { useAPI } from '../../../../providers/APIProvider'

export const DashboardEditFood = () => {
    const API = useAPI()
    const history = useHistory()
    const { id: foodId } = useParams()

    const [formState, setFormState] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    })
    const setFormField = useCallback((field, value) => {
        setFormState({ ...formState, [field]: value })
    }, [formState])
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const { name, description, category, price } = formState

    useEffect(() => {
        (async () => {
            try {
                const selectedFood = await API.getFoodById(foodId)
                const { name, description, category, price } = selectedFood
                setFormState({ name, description, category, price })
                console.log(selectedFood)
            } catch (err) {
                console.log(err)
            }
        })()
    }, [API, foodId])

    const onFormSubmited = async (event) => {
        try {
            event.preventDefault()

            const restaurantId = API.restaurant.id
            const authToken = API.authToken
            const food = { id: foodId, name, description, category, price: Number(price) }  
            await API.updateFood(food, restaurantId, authToken)

            goToFindFoodPage()
        } catch (error) {
            console.log(error)
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
        <DashboardTemplate title="Editar comida">
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
                        Salvar
                    </Button>
                </HorizontalAlign>
            </Form>
        </DashboardTemplate>
    )
}
