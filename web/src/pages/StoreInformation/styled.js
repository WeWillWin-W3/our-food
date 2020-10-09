import styled from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #F0F0F0;
`
export const InputHeader = styled.label`
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    margin-top: 35px;
    display:block;
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
`

export const Input = styled.input`
    outline: none;
    border: none;
    background-color: transparent;
    flex: 1;
    margin-left: 15px;
    font-size: 17px;
`