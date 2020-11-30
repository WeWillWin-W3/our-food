import React from 'react'

import { Navbar, Nav, NavItem, NavItemButton, Main } from './styled'
import { Logo } from '../../components/Logo'
import { ImgPlaceholder } from '../../components/ImgPlaceholder'
import { SearchBar } from './components/SearchBar'
import { Link } from "react-router-dom";
import { useAPI } from '../../providers/APIProvider'

export const Home = () => {
    const { user } = useAPI()

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
                <SearchBar />
            </Main>
        </>
    )
}