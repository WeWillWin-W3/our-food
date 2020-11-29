import React, {useState} from 'react'

import { DashboardTemplate } from '../../components/DashboardTemplate'
import { Form, HorizontalAlign, InputHeader, Input, InputBox } from './styled'
import { Button } from '../../../../components/Button'

import { useAPI } from '../../../../providers/APIProvider'

export const DashboardCreateFoods = () => {
    const API = useAPI()

    const [formState, setFormState] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    })
    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const { name, description, category, price } = formState

    const onFormSubmited = async () => {
        try {
            const food = {name, description, category, price: Number(price)}
            // TODO: pegar informações do state
            const restaurantId = 1
            const authToken = "5b85ac99-3a17-48b5-81ff-8b5a7af9fe71"
            await API.createFood(food, restaurantId, authToken)
        } catch (error) {
            alert('Ops, não foi possível realizar a operação.')
        }
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
                            placeholder="Ex. Molho de tomate, calabresa, milho, cebola, ..."
                            value={description}
                            required={true}
                            onChange={setFormFieldWithEvent('description')}/>
                    </InputBox>
                </InputHeader>
                <HorizontalAlign>
                    <InputHeader>
                        Categoria
                        <InputBox>
                            <Input
                                placeholder="Ex. Pizza"
                                value={category}
                                required={true}
                                onChange={setFormFieldWithEvent('category')}/>
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
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
                <Button type="submit" full style={{ marginTop: 40 }}>
                    Cadastrar
                </Button>
            </Form>
        </DashboardTemplate>
    )
}
