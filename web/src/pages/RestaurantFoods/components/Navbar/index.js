import React from 'react'

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
                    <NavItemButton>Entrar</NavItemButton>
                    <NavItem>Sacola</NavItem>
                </Nav>
            </NavbarContainer>
        </Navbar>
    )
}
