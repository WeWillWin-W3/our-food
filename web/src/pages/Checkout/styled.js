import React from 'react'
import styled, { css } from 'styled-components'

export const Navbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 45px;
`

export const Main = styled.main`
    padding-top: 20px;
    background-color: #F0F0F0;
    display: flex;
    padding-left: 45px;
    height: 100%;
`

export const Div = styled.div`

`

export const Title = styled.h1`
    color: #000000;
    font-size: 30px;
    text-align: left
`

export const SubTitle = styled.h3`
    margin-top: 20px;
    margin-bottom: 10px;
    color: #797979;
    font-size: 20px;
`

export const CheckoutButton = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;
    cursor: pointer;
    font-weight: 500;
    color: #fff;
    padding: 20px 40px;
    border-radius: 5px;
    background-color: #c4c4c4;
    width: 30vw;
`

export const Box = styled.div`
    padding: 15px 15px 15px 15px;
    border-radius: 9px;
    background-color: white;
    width: 28vw;
    margin-bottom: 15px;

`

export const InputBox = styled.div`
    align-items: center;
    border-color: #B2B2B2;
    padding: 18px 20px;
    border-radius: 9px;
    border-style: solid;
    border-width: 2px;
    margin-top: 10px;
    color: #707070;
    font-size: 20px;
`

export const Input = styled.input`
    outline: none;
    name='username';
    border: none;
    background-color: transparent;
    variant="filled"
    margin-left: 15px;
    font-size: 14px;
`