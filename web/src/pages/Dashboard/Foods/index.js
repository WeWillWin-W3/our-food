import React, {useState} from 'react'

import { DashboardTemplate } from '../components/DashboardTemplate'
import { Main, HorizontalAlign, InputHeader, Input, InputBox } from './styled'
import { Button } from '../../../components/Button'

import { useAPI } from '../../../providers/APIProvider'

export const DashboardFoods = () => {
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

    const onInsertButtonClicked = () => {
        const food = {name, description, category, price: Number(price)}
        // TODO: pegar informações do state
        const restaurantId = 1
        const authToken = "5b85ac99-3a17-48b5-81ff-8b5a7af9fe71"
        API.createFood(food, restaurantId, authToken)
    }

    return (
        <DashboardTemplate title="Cadastrar comida">
            <Main>
                <InputHeader>
                    Nome
                    <InputBox>
                        <Input
                            placeholder="Ex. Pizza de calabresa com pimenta"
                            value={name}
                            onChange={setFormFieldWithEvent('name')}/>
                    </InputBox>
                </InputHeader>
                <InputHeader>
                    Descrição
                    <InputBox>
                        <Input
                            placeholder="Ex. Molho de tomate, calabresa, milho, cebola, ..."
                            value={description}
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
                                onChange={setFormFieldWithEvent('price')}/>
                        </InputBox>
                    </InputHeader>
                </HorizontalAlign>
                <Button full style={{ marginTop: 40 }} onClick={onInsertButtonClicked}>
                    Cadastrar
                </Button>
            </Main>
        </DashboardTemplate>
    )
}
