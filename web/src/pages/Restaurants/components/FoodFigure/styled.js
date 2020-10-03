import styled from 'styled-components'

export const FoodFigure = styled.div`
    display: inline-block;
    margin: 20px;

    cursor: pointer;

    &:hover > p {
        color: rgba(0, 0, 0, 0.8);
        font-weight: 600;
    }
`

export const FoodFigureImage = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 6px;
    margin-bottom: 10px;
`

export const FoodFigureName = styled.p`
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    color: rgba(0, 0, 0, 0.6);

    transition: all 0.1s;
`
