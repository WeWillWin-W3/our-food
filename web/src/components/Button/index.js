import styled, { css } from 'styled-components'

export const Button = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    padding: 18px 30px;
    border-radius: 5px;

    ${props => props.full && 'width: 100%;'}
    ${props => props.outline ? OutlineButton : FillButton}
`
const FillButton = css`
    color: #fff;
    background-color: #c0c0c0;
    box-shadow: #c0c0c040 0 5px 7px;

    transition: background-color 300ms ease-in-out, box-shadow 300ms ease-in-out, padding 300ms ease-in-out;

    :hover {
        background-color: #aaa8a8;
        box-shadow: #aaa8a88f 0 9px 9px;
        padding: 18.5px 30.5px;
    }
`

const OutlineButton = css`
    border: #989898 solid 2px;
    color: #989898;
    background-color: transparent;

    transition: background-color 300ms ease-in-out, color 300ms ease-in-out;

    :hover {
        background-color: #989898;
        color: #fff;
    }
`