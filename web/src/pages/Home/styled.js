import React from 'react'
import styled, { css } from 'styled-components'

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

        li:not(:last-child) {
            margin-right: 30px;
        }
    }
`

export const NavItem = styled.li`
    font-weight: 500;
    color: #989898;
    ${props => props.button && NavItemButton}
`

const NavItemButton = css`
    border: #989898 solid 2px;
    border-radius: 5px;
    padding: 10px 25px;
    cursor: pointer;
`

export const Main = styled.main`
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
`