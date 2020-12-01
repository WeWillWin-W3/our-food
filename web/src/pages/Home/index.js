import React, { useState } from 'react'
import _ from 'lodash'

import { Navbar, Nav, NavItem, NavItemButton, Main } from './styled'
import { Logo } from '../../components/Logo'
import { ImgPlaceholder } from '../../components/ImgPlaceholder'
import { SearchBar } from '../../components/SearchBar'
import { MdGpsFixed } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { useAPI } from '../../providers/APIProvider'

export const Home = () => {
    const [inputText, setInputText] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const { getRestaurantsByName, user } = useAPI()

    const getSearchResults = _.throttle(() =>
        getRestaurantsByName(inputText)
            .then(restaurants => setSearchResults(restaurants))
        , 500)

    const onInputChange = (e) => {
        setInputText(e.target.value)
        getSearchResults()
    }

    const maxRestaurantsResults = 4

    return (
        <>
            <Navbar>
                <Logo />
                <Nav>
                    <Link to="/restaurants"><NavItem>OurFood Restaurantes</NavItem></Link>
                    {
                        !!user ?
                            <div>Bem vindo, {user.name}</div> :
                            <>
                                <Link to="/signup"><NavItem>Cadastre-se</NavItem></Link>
                                <Link to="/signin"><NavItemButton>Entrar</NavItemButton></Link>
                            </>
                    }
                </Nav>
            </Navbar>
            <Main>
                <ImgPlaceholder width={200} height={200} style={{ margin: '40px 0' }} />
                <SearchBar
                    value={inputText}
                    onChange={onInputChange}
                    onClear={() => setInputText('')}
                    showResults={searchResults.length !== 0 && inputText}
                    placeholder="Onde você deseja comer hoje?"
                    results={searchResults.slice(0, maxRestaurantsResults).map((restaurant, index) => (
                        <Link
                            key={index}
                            to={`/restaurants/${restaurant.id}/foods`}
                        >
                            <div>
                                <MdGpsFixed />{restaurant.name}
                            </div>
                        </Link>
                    ))}
                />
            </Main >
        </>
    )
}