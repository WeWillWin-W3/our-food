import React from 'react'

import { Navbar, Nav, NavItem, NavItemButton, Main } from './styled'
import { Logo } from '../../components/Logo'
import { ImgPlaceholder } from '../../components/ImgPlaceholder'
import { SearchBar } from './components/SearchBar'

export const Home = () => (
    <>
        <Navbar>
            <Logo/>
            <Nav>
                <NavItem>OurFood Restaurantes</NavItem>
                <NavItem>Cadastre-se</NavItem>
                <NavItemButton>Entrar</NavItemButton>
            </Nav>
        </Navbar>
        <Main>
            <ImgPlaceholder width={200} height={200} style={{ margin: '40px 0' }}/>
            <SearchBar/>
        </Main>
    </>
)