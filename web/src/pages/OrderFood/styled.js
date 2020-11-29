import React from 'react'
import styled from 'styled-components'

import { MdClose, MdStore, MdAdd, MdRemove } from 'react-icons/md'

export const Page = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background-color: #f0f0f0;
`
export const OrderCard = styled.div`
    background-color: #fff;
    padding: 20px 40px 40px 40px;
    border-radius: 12px;

    > * {
        margin-bottom: 25px;
    }
`
export const CloseButton = (props) => (
    <StyledCloseButton {...props}>
        <MdClose />
    </StyledCloseButton>
)

const StyledCloseButton = styled.div`
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 10px;
    cursor: pointer;

    svg {
        font-size: 20px;
    }

`

export const CommentBox = styled.div``

export const CardHeader = styled.header`
    font-size: 15px;

    > * {
        margin-bottom: 10px;
    }
`

export const HeaderTitle = styled.h2`
    font-size: 18px;
`

export const HeaderSubtitle = styled.p`
    font-weight: 400;
    color: #757f85;
`

export const HeaderPrice = styled.span`
    font-weight: 500;
`

export const OrderRestaurant = ({ children }) => (
    <StyledOrderRestaurant>
        <MdStore />
        <span>{children}</span>
    </StyledOrderRestaurant>
)

const StyledOrderRestaurant = styled.div`
    display: flex;
    align-items: center;
    padding: 12px;
    border: #8c8c8c 1px solid;
    border-radius: 5px;
    color: #8c8c8c;

    svg {
        font-size: 30px;
        margin-right: 10px;
    }

    span {
        font-size: 14px;
        font-weight: 500;
    }
`

export const CommentHint = styled.p`
    font-size: 14px;
    margin-bottom: 10px;
`

export const CommentTextArea = (props) => (
    <div style={{ display: 'flex' }}>
        <StyledCommentTextArea {...props}></StyledCommentTextArea>
    </div>
)
const StyledCommentTextArea = styled.textarea`
    overflow: auto;
    outline: none;
    box-shadow: none;
    resize: none;
    width: 100%;
    border: #8c8c8c 1px solid;
    padding: 14px;
    border-radius: 5px;
    font-size: 14px;
    margin-bottom: 50px;
`

export const OrderOptions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0;
`
export const OptionQuantity = ({ value, onAdd, onRemove }) => (
    <StyledOptionQuantity>
        <MdRemove onClick={onRemove} />
        <span>{value}</span>
        <MdAdd onClick={onAdd} />
    </StyledOptionQuantity>
)

const Option = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 20px;
    border: #8c8c8c 1px solid;
    border-radius: 5px;
    font-size: 22px;
    font-weight: 600;
    color: #8c8c8c;
    box-shadow: #8c8c8c1c 0 0 10px;
`

const StyledOptionQuantity = styled(Option)`
    margin-right: 20px;
    
    > * {
        flex: 1;
    }
`

export const OptionAction = (props) => (
    <StyledOptionAction {...props}>
        <span>Adicionar</span>
        <span>{props.amount}</span>
    </StyledOptionAction>
)

export const StyledOptionAction = styled(Option)`
    justify-content: space-between;
    font-size: 13px;
    width: 150px;
    cursor: pointer;
`
