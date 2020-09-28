import styled, { css } from 'styled-components'

export const StyledSearchBar = styled.div`
    display: flex;  
    align-items: center;

    width: 60%;

    margin-top: 20px;
`

export const SearchBoxWrapper = styled.div`
    flex: 1;
    height: 100%;
    position: relative;
`

const IconStyle = css`
    color: #707070;
    font-size: 25px;
`

export const SearchResults = styled.div`
    display: ${props => !!props.show ? 'block' : 'none'};
    position: absolute;
    background-color: #f5f5f5;
    padding: 12.5px 20px;
    border-radius: 0 0 9px 9px;

    div {
        display: flex;
        align-items: center;
        margin: 10px 10px 10px 0;
        color: #707070;

        svg {
            ${IconStyle}
            margin-right: 10px;
        }
    }

`

export const SearchInputBox = styled.div`
    display: flex;
    align-items: center;
    background-color: #f5f5f5;
    padding: 18px 20px;
    border-radius: 9px;
    margin-right: 20px;

    svg { 
        ${IconStyle}
    }
`

export const SearchInput = styled.input`
    outline: none;
    border: none;
    background-color: transparent;

    flex: 1;
    margin-left: 15px;
    font-size: 17px;
`

export const SearchButton = styled.button`
    font-size: 100%;
    font-family: inherit;
    border: 0;

    cursor: pointer;

    font-weight: 500;
    color: #fff;
    padding: 20px 40px;
    border-radius: 5px;
    background-color: #c4c4c4;
` 