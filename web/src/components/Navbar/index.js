import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

import { Logo } from '../Logo'
import { SearchBar } from '../SearchBar'

import { AiOutlineSearch } from 'react-icons/ai'
import {
    Navbar, NavbarContainer, NavbarDestination,
    Nav, NavItem, NavItemButton
} from './styled'
import { useAPI } from '../../providers/APIProvider'

export const NavbarComponent = () => {
    const [foodSearchText, setFoodSearchText] = useState('')
    const [foodSearchResults, setFoodSearchResults] = useState([])
    const { getFoodsByName, getRestaurantById, user } = useAPI()
    const history = useHistory()

    const destination = user?.location

    const onInputChange = (e) => setFoodSearchText(e.target.value)

    useEffect(() => {
        // TODO: Usar estratégia de throttle/debounce
        getFoodsByName(foodSearchText)
            .then(foods => setFoodSearchResults(foods.slice(0, 4)))
    }, [foodSearchText, getFoodsByName])

    const onFoodCardClicked = (food) => async () =>
        history.push({
            pathname: '/order',
            state: { food, restaurant: await getRestaurantById(food.restaurant_id) }
        })

    return (
        <Navbar>
            <NavbarContainer>
                <Logo />
                <SearchBar
                    value={foodSearchText}
                    onChange={onInputChange}
                    onClear={() => setFoodSearchText('')}
                    placeholder="Busque sua comida"
                    showSearchButton={false}
                    wrapperStyle={{ marginTop: 0, maxWidth: 300 }}
                    inputWrapperStyle={{ padding: '12px 18px' }}
                    icon={AiOutlineSearch}
                    showResults={foodSearchResults.length !== 0 && foodSearchText}
                    results={foodSearchResults.map((food, index) => (
                        <div
                            key={index}
                            onClick={onFoodCardClicked(food)}
                            style={{ cursor: 'pointer' }}
                        >
                            {food.name}
                        </div>
                    ))}
                />
                {destination && <NavbarDestination destination={destination} />}
                <Nav>
                    {
                        !!user ?
                            <div>Bem vindo, {user.name}</div> :
                            <Link to="/signin"><NavItemButton>Entrar</NavItemButton></Link>
                    }
                    <Link to="/checkout"><NavItem>Sacola</NavItem></Link>
                </Nav>
            </NavbarContainer>
        </Navbar >
    )
}
