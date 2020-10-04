import React from 'react'

import { Logo } from '../../../../components/Logo'
import { Navbar, NavbarContainer, NavbarSearch, Nav, NavItem } from './styled'

export default function NavbarComponent() {
    return (
        <Navbar>
            <NavbarContainer>
                <Logo />
                <NavbarSearch placeholder="Busque sua comida" />
                <Nav>
                    <NavItem outline>Entrar</NavItem>
                    <NavItem>Sacola</NavItem>
                </Nav>
            </NavbarContainer>
        </Navbar>
    )
}
