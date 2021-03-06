import styled, { css } from 'styled-components'

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #F0F0F0;
`

const IconStyle = css`
    color: #000000;
    font-size: 25px;
`
export const InputHeader = styled.label`
    font-weight: 500;
    font-size: 20px;
    color: #000000;
    margin-top: 35px;
    display:block;
`

export const OtherOptionsBox = styled.div`
    display: flex;
    justify-content: space-between;
`

export const OtherOption = styled.h4`
    color: #C0C0C0;
    margin-top: 28px;
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
    svg { 
        ${IconStyle}
    }
`

export const Input = styled.input`
    outline: none;
    border: none;
    background-color: transparent;
    flex: 1;
    margin-left: 15px;
    font-size: 17px;
`