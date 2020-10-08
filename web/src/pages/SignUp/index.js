import React, { useState } from 'react'

import { InputHeader, Main, Input, InputBox, Button, OtherOption, OtherOptionsBox } from './styled'

import { Card } from '../../components/Card'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const SignUp = () => {

    const [hidePassword, setHidePassword] = useState(true)

    return (
        <>
            <Main>
                <Card title="Cadastrar-se">
                    <InputHeader style={{ marginTop: "52px" }}>
                        Nome Completo
                        <InputBox>
                            <Input placeholder="Digite seu nome completo aqui" />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Email
                        <InputBox>
                            <Input placeholder="Digite seu email aqui" />
                        </InputBox>
                    </InputHeader>
                    <InputHeader>
                        Senha
                        <InputBox>
                            <Input placeholder="Digite sua senha aqui" type={hidePassword ? "password" : "text"} />
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
                            <Input />
                        </InputBox>
                    </InputHeader>
                    <Button>
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