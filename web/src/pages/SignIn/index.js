import React, { useState } from 'react'

import { InputHeader, Main, Input, InputBox, OtherOption, OtherOptionsBox } from './styled'

import { Card } from '../../components/Card'

import { Button } from '../../components/Button'

import { Link } from 'react-router-dom'

import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import { useAPI } from '../../providers/APIProvider'

export const SignIn = () => {
    const API = useAPI()

    const [hidePassword, setHidePassword] = useState(true)
    const [formState, setFormState] = useState({
        email: "",
        password: ""
    })
    const setFormField = (field, value) => setFormState({ ...formState, [field]: value })
    const setFormFieldWithEvent = field => event => setFormField(field, event.target.value)

    const { email, password } = formState

    const onSigninButtonClicked = async () => await API.signIn({ email, password })

    return (
        <>
            <Main>
                <Card title="Fazer login">
                    <InputHeader style={{ marginTop: "52px" }}>
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
                                onChange={setFormFieldWithEvent('password')} />
                            {
                                hidePassword ?
                                    <AiFillEyeInvisible onClick={() => setHidePassword(false)} />
                                    :
                                    <AiFillEye onClick={() => setHidePassword(true)} />

                            }
                        </InputBox>
                    </InputHeader>
                    <Button full style={{ marginTop: 46 }} onClick={onSigninButtonClicked}>
                        Entrar
                    </Button>
                    <OtherOptionsBox>
                        <OtherOption align="start">Esqueceu sua senha?</OtherOption>
                        <Link to="/signup"><OtherOption align="end">Cadastrar-se</OtherOption></Link>
                    </OtherOptionsBox>
                </Card>
            </Main>
        </>
    )
}