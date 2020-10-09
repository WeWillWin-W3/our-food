import React, { useState } from 'react'
import { MdPlace, MdCancel, MdGpsFixed } from 'react-icons/md'

import { 
    StyledSearchBar, SearchBoxWrapper, 
    SearchInputBox, SearchInput, SearchResults,  
} from './styled'

import { Button } from '../../../../components/Button'

export const SearchBar = () => {
    const [inputText, setInputText] = useState('')

    // TODO: Buscar dados de forma dinâmica (https://github.com/vercel/swr) 
    const searchResults = ['Hamburgueria Matei Onça', 'Pizzaria San Carlos']

    return (
        <StyledSearchBar>
            <SearchBoxWrapper>
                <SearchInputBox>
                    <MdPlace />
                    <SearchInput 
                        value={inputText} 
                        onChange={e => setInputText(e.target.value)} 
                        placeholder="Qual é o seu endereço?"
                    />
                    {!!inputText && 
                        <MdCancel 
                            onClick={() => setInputText('')}
                            style={{ cursor: 'pointer' }}
                        />
                        
                    }
                </SearchInputBox>
                <SearchResults show={!!inputText}>
                    {searchResults.map((restaurant, index) => (
                        <div key={index}><MdGpsFixed/>{restaurant}</div>
                ))}
                </SearchResults>
            </SearchBoxWrapper>
            <Button>Pesquisar</Button>
        </StyledSearchBar>
    )
}
