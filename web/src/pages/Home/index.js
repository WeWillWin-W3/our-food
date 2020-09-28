import React from 'react'

import { Navbar, Nav, NavItem, Main } from './styled'
import { Logo } from '../../components/Logo'
import { ImgPlaceholder } from '../../components/ImgPlaceholder'
import { SearchBar } from '../../components/SearchBar'

export const Home = () => (
    <>
        <Navbar>
            <Logo/>
            <Nav>
                <NavItem>OurFood Restaurantes</NavItem>
                <NavItem>Cadastre-se</NavItem>
                <NavItem button>Entrar</NavItem>
            </Nav>
        </Navbar>
        <Main>
            <ImgPlaceholder width={200} height={200} />
            <SearchBar/>
        </Main>
    </>
)