import React from 'react'
import styled, { css } from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    padding: 83px;
    border-radius: 28px;
    background-color: white;
`

const IconStyle = css`
    color: #707070;
    font-size: 25px;
`

export const  Title = styled.h1`
    font-weight: 500;
    font-size: 40px;
    color: #000000;
    text-align:center;
`

export const InputHeader = styled.label`
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    margin-top: 48px;
    display:block;
`

export const OtherOptionsBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const OtherOption = styled.h4`
    color: #C0C0C0;
    margin-top: 28px;
    font-family: roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    cursor: pointer;
`

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    border-color: #B2B2B2;
    padding: 18px 20px;
    border-radius: 9px;
    border-style: solid;
    border-width: 2px;
    margin-top: 10px;
    width: 26vw;
    svg { 
        ${IconStyle}
    }
`
export const Button = styled.button`
    border: none;
    border-radius: 9px;
    padding: 20px 20px;
    cursor: pointer;
    margin-top: 93px;
    background: #C0C0C0;
    width: 100%;
    font-size: 28px;
    color: white;
`

export const Input = styled.input`
    outline: none;
    border: none;
    background-color: transparent;
    flex: 1;
    margin-left: 15px;
    font-size: 17px;
`