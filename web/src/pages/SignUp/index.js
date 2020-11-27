import React, { useState } from 'react'

import { InputHeader, Main, Input, InputBox, OtherOption, OtherOptionsBox } from './styled'

import { Button } from '../../components/Button'

import { Card } from '../../components/Card'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { createUser } from '../../providers/APIProvider/API'

export const SignUp = () => {

    const [hidePassword, setHidePassword] = useState(true)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [location, setLocation] = useState("")

    const onSignButtonClicked = async (event) => {
        try {
            await createUser({ name, email, password, phone: phoneNumber, location })
        } catch {
            alert("Deu ruim man")
        }
    }

    return (
        <>
            <Main>
                <Card title="Cadastrar-se">
                    <InputHeader style={{ marginTop: "52px" }}>
                        Nome Completo
                        <InputBox >
                            <Input placeholder="Digite seu nome completo aqui" onChange={(event) => setName(event.target.value)} />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Email:
                        <InputBox>
                            <Input placeholder="Digite seu email aqui" onChange={(event) => setEmail(event.target.value)} />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Senha
                        <InputBox>
                            <Input placeholder="Digite sua senha aqui" type={hidePassword ? "password" : "text"} onChange={(event) => setPassword(event.target.value)} />
                            {
                                hidePassword ?
                                    <AiFillEyeInvisible onClick={() => setHidePassword(false)} />
                                    :
                                    <AiFillEye onClick={() => setHidePassword(true)} />

                            }
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Celular (com DDD)
                        <InputBox>
                            <Input value={phoneNumber} onChange={(event) => setPhoneNumber(event.target.value)} />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Localização
                        <InputBox>
                            <Input value={location} onChange={(event) => setLocation(event.target.value)} />
                        </InputBox>
                    </InputHeader>
                    <Button full style={{ marginTop: 46 }} onClick={onSignButtonClicked}>
                        Entrar
                    </Button>
                    <OtherOptionsBox>
                        <OtherOption align="start">Já possui conta?</OtherOption>
                    </OtherOptionsBox>
                </Card>
            </Main>
        </>
    )
}