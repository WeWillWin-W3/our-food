import React, { useState } from 'react'

import { InputHeader, Main, Title, Input, InputBox, Button, OtherOption, OtherOptionsBox, Card } from './styled'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

export const SignIn = () => {

    const [hidePassword, setHidePassword] = useState(true)

    return (
        <>
            <Main style={{ height: "100vh", backgroundColor: "#F0F0F0" }}>
                <Card>
                    <Title>
                        Fazer login
                    </Title>
                    <InputHeader>
                        Email
                        <InputBox>
                            <Input />
                        </InputBox>
                    </InputHeader>
                    <InputHeader style={{ marginTop: "48px" }}>
                        Senha
                        <InputBox>
                            <Input type={hidePassword ? "password" : "text"} />
                            {
                                hidePassword ?
                                    <AiFillEyeInvisible style={{ color: "#000000" }} onClick={() => setHidePassword(false)} />
                                    :
                                    <AiFillEye style={{ color: "#000000" }} onClick={() => setHidePassword(true)} />

                            }
                        </InputBox>
                    </InputHeader>
                    <Button>
                        Entrar
                    </Button>
                    <OtherOptionsBox>
                        <OtherOption textAlign="start">Esqueceu sua senha?</OtherOption>
                        <OtherOption textAlign="end">Cadastrar-se</OtherOption>
                    </OtherOptionsBox>
                </Card>
            </Main>
        </>
    )
}