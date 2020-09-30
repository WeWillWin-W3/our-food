import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
    display: flex;

    width: 300px;
    max-width: 350px;
    padding: 16px;
    margin: 16px;

    background-color: #FFFFFF;
    border: 2px solid rgba(0, 0, 0, 0.15);
    border-radius: 6px;
`

export const CardAvatar = ({ src, alt }) => (
    <StyledCardAvatar>
        <img alt={alt} src={src} />
    </StyledCardAvatar>
)

export const StyledCardAvatar = styled.div`
        overflow: hidden;
        width: 80px;
        height: 80px;
        margin-right: 16px;

        border-radius: 6px;

        img {
            height: 100%;
            width: 100%;
        }
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
