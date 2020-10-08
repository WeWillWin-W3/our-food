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
    width: 50%;
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

export const SubTitle = styled.h3`
    margin-top: 20px;
    margin-bottom: 10px;
    color: #797979;
    font-size: 20px;
`

export const Title = styled.h1`
    color: #000000;
    font-size: 30px;
    text-align: left
`