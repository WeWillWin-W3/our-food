import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
    display: flex;
    width: 28vw;
    padding: 16px;
    background-color: #FFFFFF;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 6px;
`

export const CardPrincipal = styled.div`
    color:rgba(0, 0, 0, 0.85);
`

export const CardNameStreet = styled.h3`
    margin-bottom: 6px;
    font-size: 20px;
`

export const CardComplement = styled.p`
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
`

export const CardCity = styled.span`
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
`