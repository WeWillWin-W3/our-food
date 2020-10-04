import React from 'react'

import { Logo } from '../../../../components/Logo'
import { Navbar, NavbarContainer, NavbarSearch, NavbarDestination, Nav, NavItem } from './styled'

export default function NavbarComponent() {
    return (
        <Navbar>
            <NavbarContainer>
                <Logo />
                <NavbarSearch placeholder="Busque sua comida" />
                <NavbarDestination destination="Av. São Carlos, 864" />
                <Nav>
                    <NavItem outline>Entrar</NavItem>
                    <NavItem>Sacola</NavItem>
                </Nav>
            </NavbarContainer>
        </Navbar>
    )
}
