import React from 'react'
import styled from 'styled-components'

import { MdDelete, MdEdit } from 'react-icons/md'

export const Card = styled.div`
    position: relative;
    display: flex;
    width: 300px;
    max-width: 350px;
    padding: 16px;
    margin: 16px;

    background-color: #FFFFFF;
    border: 2px solid rgba(0, 0, 0, 0.1);
    border-radius: 6px;

    transition: all 0.2s;

    &:hover {
        cursor: pointer;
        border: 2px solid rgba(0, 0, 0, 0.35);
    }
`

export const DeleteButton = ({onDeleteButtonClicked}) => (
    <StyledDeleteButton onClick={onDeleteButtonClicked}>
        <MdDelete/>
    </StyledDeleteButton>
)

const StyledDeleteButton = styled.div`
    position: absolute;
    top: 6px;
    right: 6px;

    svg {
        font-size: 20px;
        color: #333;

        transition: all .3s;
    }

    svg:hover {
        color: #E64A19;
    }
`

export const EditButton = ({onEditButtonClicked}) => (
    <StyledEditButton onClick={onEditButtonClicked}>
        <MdEdit/>
    </StyledEditButton>
)

const StyledEditButton = styled.div`
    position: absolute;
    top: 6px;
    right: 26px;

    svg {
        font-size: 20px;
        color: #333;

        transition: all .3s;
    }

    svg:hover {
        color: #FFC107;
    }
`

export const CardAvatar = styled.img`
        overflow: hidden;
        width: 80px;
        height: 80px;
        margin-right: 16px;

        border-radius: 6px;
`

export const CardPrincipal = styled.div`
    color:rgba(0, 0, 0, 0.85);
`

export const CardTitle = styled.h4`
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 600;
`

export const CardSubTitle = styled.p`
    margin-bottom: 28px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
`

export const CardDescription = styled.span`
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`
