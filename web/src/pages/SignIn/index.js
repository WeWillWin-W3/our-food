import React, { useState } from 'react'

import { InputHeader, Main, Input, InputBox, Button, OtherOption, OtherOptionsBox } from './styled'

import { Card } from '../../components/Card'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const SignIn = () => {

    const [hidePassword, setHidePassword] = useState(true)

    return (
        <>
            <Main>
                <Card title="Fazer login">
                    <InputHeader style={{ marginTop: "52px" }}>
                        Email
                        <InputBox>
                            <Input placeholder="Digite seu email aqui"/>
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
                    <Button>
                        Entrar
                    </Button>
                    <OtherOptionsBox>
                        <OtherOption align="start">Esqueceu sua senha?</OtherOption>
                        <OtherOption align="end">Cadastrar-se</OtherOption>
                    </OtherOptionsBox>
                </Card>
            </Main>
        </>
    )
}