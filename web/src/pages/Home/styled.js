import React from 'react'
import styled from 'styled-components'

import { Button } from '../../components/Button'

export const NavItemButton = styled(Button).attrs(() => ({ outline: true }))`
    padding: 10px 25px;
`

export const Navbar = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 45px;
`

export const Nav = ({ children }) => (
    <StyledNav>
        <ul>
            {children}
        </ul>
    </StyledNav>
)

const StyledNav = styled.nav`
    ul {
        display: flex;
        align-items: center;

        a:not(:last-child), div:not(:last-child) {
            margin-right: 30px;
        }
    }
`

export const NavItem = styled.li`
    font-weight: 500;
    color: #989898;
`

export const Main = styled.main`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`