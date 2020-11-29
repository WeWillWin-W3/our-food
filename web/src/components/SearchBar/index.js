import React from 'react'

import { MdPlace, MdCancel } from 'react-icons/md'
import {
    StyledSearchBar, SearchBoxWrapper,
    SearchInputBox, SearchInput, SearchResults,
} from './styled'

import { Button } from '../Button'

export const SearchBar = ({
    value = '', onChange = () => { }, showResults = false,
    onClear = () => { }, results = [], placeholder = 'Pesquisar',
    showSearchButton = true, wrapperStyle = {}, inputWrapperStyle = {}, icon: Icon = MdPlace
}) => (
        <StyledSearchBar style={wrapperStyle}>
            <SearchBoxWrapper>
                <SearchInputBox style={inputWrapperStyle}>
                    <Icon />
                    <SearchInput
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                    />
                    {!!value &&
                        <MdCancel
                            onClick={onClear}
                            style={{ cursor: 'pointer' }}
                        />
                    }
                </SearchInputBox>
                <SearchResults show={showResults}>
                    {results}
                </SearchResults>
            </SearchBoxWrapper>
            {showSearchButton && <Button>Pesquisar</Button>}
        </StyledSearchBar>
    )
