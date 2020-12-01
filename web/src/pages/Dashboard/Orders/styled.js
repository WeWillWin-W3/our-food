import React from 'react'
import styled from 'styled-components'

export const Board = styled.div`
    display: flex;
    flex: 1;

    > div:not(:last-child) {
        border-right: #d1d1d1 dashed 2px;
    }
`

export const BoardColumn = styled.div`
    flex: 1;
    height: 100%;
`

export const ColumnCards = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    > div:not(:last-child) {
        margin-bottom: 20px;
    }
`

export const ColumnCard = ({ items, id }) => (
    <StyledColumnCard>
        <div style={{ marginBottom: 10 }}>
            <span style={{ color: '#898989' }}>#{id}</span>
        </div>
        { items.map(item => (
            <div key={item.id} style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" checked={item.checked} />
                <span style={{ marginLeft: 5 }}>{item.name}</span>
            </div>
        )) }
    </StyledColumnCard>
)

const StyledColumnCard = styled.div`
    background-color: #e2e2e2;

    width: 80%;
    border-radius: 10px;
    padding: 15px;
`

export const ColumnTitle = styled.h3`
    text-align: center;
    border-top: #d1d1d1 solid 2px;
    border-bottom: #d1d1d1 solid 2px;
    padding: 20px;
    font-weight: 400;
    font-size: 1.1em;
`
