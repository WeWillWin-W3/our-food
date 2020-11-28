import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";

import { InputHeader, Main, Input, InputBox, OtherOption, OtherOptionsBox } from './styled'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'

import { AiFillEye, AiFillEyeInvisible, AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useAPI } from '../../providers/APIProvider';

export const SignUp = () => {
    const history = useHistory()
    const API = useAPI()

    const [formState, setFormState] = useState({
        hidePassword: true,
        email: "jorge@email",
        name: "",
        password: "",
        location: "",
        phoneNumber: "67993211518"
    })
    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const { hidePassword, email, phoneNumber, password, name, location } = formState

    const onSignButtonClicked = () =>
        API.createUser({ name, email, password, phone: phoneNumber, location })


    useEffect(() => {
        if (API.error) {
            alert(`Deu ruim man: ${API.error}`)
        }
    }, [API.error])

    // useEffect(() => {
    //     if (API.user) {
    //         history.push('/restaurants')
    //     }
    // }, [API.user, history])

    return (
        <>
            <Main>
                <Card title="Cadastrar-se">
                    <InputHeader style={{ marginTop: "52px" }}>
                        Nome Completo
                        <InputBox>
                            <Input
                                placeholder="Digite seu nome completo aqui"
                                value={name}
                                onChange={setFormFieldWithEvent('name')}
                            />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Email
                        <InputBox>
                            <Input
                                placeholder="Digite seu email aqui"
                                value={email}
                                onChange={setFormFieldWithEvent('email')}
                            />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Senha
                        <InputBox>
                            <Input
                                placeholder="Digite sua senha aqui"
                                type={hidePassword ? "password" : "text"}
                                value={password}
                                onChange={setFormFieldWithEvent('password')}
                            />
                            {
                                hidePassword ?
                                    <AiFillEyeInvisible onClick={() => setFormField('hidePassword', false)} />
                                    :
                                    <AiFillEye onClick={() => setFormField('hidePassword', true)} />
                            }
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Celular (com DDD)
                        <InputBox>
                            <Input type="number" value={phoneNumber} onChange={setFormFieldWithEvent('phoneNumber')} />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Localização
                        <InputBox>
                            <Input value={location} onChange={setFormFieldWithEvent('location')} />
                        </InputBox>
                    </InputHeader>
                    <Button full style={{ marginTop: 46 }} onClick={onSignButtonClicked}>
                        {API.loading ? <AiOutlineLoading3Quarters /> : "Entrar"}
                    </Button>
                    <OtherOptionsBox>
                        <OtherOption align="start">Já possui conta?</OtherOption>
                    </OtherOptionsBox>
                </Card>
            </Main>
        </>
    )
}