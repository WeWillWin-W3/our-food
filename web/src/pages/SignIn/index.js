import React, { useState } from 'react'

import { 
    InputHeader, Main, Title, Input, InputBox, 
    OtherOption, OtherOptionsBox, Card 
} from './styled'

import { Button } from '../../components/Button'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

export const SignIn = () => {

    const [hidePassword, setHidePassword] = useState(true)

    return (
        <>
            <Main>
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
                    <InputHeader>
                        Senha
                        <InputBox>
                            <Input type={hidePassword ? "password" : "text"} />
                            {
                                hidePassword ?
                                    <AiFillEyeInvisible onClick={() => setHidePassword(false)} />
                                    :
                                    <AiFillEye onClick={() => setHidePassword(true)} />

                            }
                        </InputBox>
                    </InputHeader>
                    <Button full style={{ marginTop: 60 }}>
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