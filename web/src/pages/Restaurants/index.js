import React from 'react'

import { RestaurantCard } from './components/RestaurantCard'
import { Container } from './styled'

export const Restaurants = () => (
    <Container>
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </Container>
)
