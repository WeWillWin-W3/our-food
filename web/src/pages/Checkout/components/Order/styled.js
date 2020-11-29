import styled from 'styled-components'

export const Box = styled.div`
    padding: 15px;
    border-radius: 9px;
    background-color: #DEE2E6;
    margin: 80px 45px 15px 80px;
`

export const Div = styled.div`
    width: 50%;
`

export const DivColumn = styled.div`
    display: flex;

    > * {
        flex: 1;
    }
`

export const Text = styled.p`
    color: rgba(0, 0, 0, 0.6);
    font-size: 14px;
    padding-top: 15px;
`

export const TextMain = styled.p`
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    font-size: 22px;
`

export const TextPrice = styled.p`
    color: rgba(0, 0, 0, 0.7);
    font-weight: 500;
    font-size: 22px;
    text-align: right;
`

export const FoodOptions = styled.div`
    display: flex;
    margin: 8px 0 300px;
    font-size: 14px;
    font-weight: bolder;
`

export const Option = styled.span`
    color: ${props => props.danger ? '#f83031' : 'rgba(0, 0, 0, 0.6)'};
    margin-right: 10px;
    cursor: pointer;
`

export const TextTitle = styled.p`
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 28px;
`