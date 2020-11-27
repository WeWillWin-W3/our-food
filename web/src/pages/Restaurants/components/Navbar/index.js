import React from 'react'
import { Link } from 'react-router-dom'

import { Logo } from '../../../../components/Logo'
import { 
    Navbar, NavbarContainer, NavbarSearch, 
    NavbarDestination, Nav, NavItem, NavItemButton 
} from './styled'

export function NavbarComponent() {
    return (
        <Navbar>
            <NavbarContainer>
                <Logo />
                <NavbarSearch placeholder="Busque sua comida" />
                <NavbarDestination destination="Av. São Carlos, 864" />
                <Nav>
                    <Link to= "/signin"><NavItemButton>Entrar</NavItemButton></Link>
                    <Link to="/checkout"><NavItem>Sacola</NavItem></Link>
                </Nav>
            </NavbarContainer>
        </Navbar>
    )
}
