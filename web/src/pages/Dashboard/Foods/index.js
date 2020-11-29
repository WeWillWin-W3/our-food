import React, {useState} from 'react'

import { DashboardTemplate } from '../components/DashboardTemplate'
import { Main, HorizontalAlign, InputHeader, Input, InputBox } from './styled'
import { Button } from '../../../components/Button'

export const DashboardFoods = () => {
    const [formState, setFormState] = useState({
        name: "",
        description: "",
        category: "",
        price: ""
    })
    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const { name, description, category, price } = formState

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
                            placeholder="Ex. A melhor pizza do bairro"
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
                <Button full style={{ marginTop: 40 }}>
                    Cadastrar
                </Button>
            </Main>
        </DashboardTemplate>
    )
}
