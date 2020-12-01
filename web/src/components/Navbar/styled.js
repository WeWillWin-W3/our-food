import React from 'react'
import styled from 'styled-components'

import { AiOutlineSearch, AiTwotonePushpin } from 'react-icons/ai';

import { Button } from '../Button'

export const Navbar = styled.header`
    height: 70px;
    padding: 0 20px;

    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
`

export const NavbarContainer = styled.div`
    max-width: 1200px;
    height: 100%;
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const NavbarSearch = ({ placeholder, value, onChange, results }) => (
    <NavbarSearchBox>
        <AiOutlineSearch style={{ marginRight: '10px', fill: 'rgba(0, 0, 0, 0.65)' }} />
        <NavbarSearchInput type="text" placeholder={placeholder} value={value} onChange={onChange} />
    </NavbarSearchBox>
)

const NavbarSearchBox = styled.div`
    padding: 10px 15px;
    border-radius: 6px;
    border: 2px solid transparent;
    background-color: rgba(0, 0, 0, 0.15);

    display: flex;
    align-items: center;

    transition: all 0.2s;

    &:hover {
        border: 2px solid rgba(0, 0, 0, 0.25);
    }

    &:focus-within {
        border: 2px solid rgba(0, 0, 0, 0.5);
    }
`

const NavbarSearchInput = styled.input`
    font-size: 16px;
    color: rgba(0, 0, 0, 0.65);
    border: none;
    outline: none;
    background-color: transparent;
`

export const NavbarDestination = ({ destination }) => (
    <div>
        <NavbarDestinationTitle>Entregar em:</NavbarDestinationTitle>
        <NavbarDestinationValueBox>
            <AiTwotonePushpin style={{ marginRight: '10px', fill: 'rgba(0, 0, 0, 0.65)' }} />
            <span>{destination}</span>
        </NavbarDestinationValueBox>
    </div>
)

const NavbarDestinationTitle = styled.p`
    font-size: 14px;
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.5);
    margin-bottom: 5px;
`

const NavbarDestinationValueBox = styled.div`
    display: flex;
    align-items: center;
`

export const Nav = styled.nav`
    display: flex;
    align-items: center;
`

export const NavItem = styled.div`
    text-decoration: none;

    padding: 10px 30px;

    font-size: 18px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.5);

    cursor: pointer;

    transition: all 0.2s;

    &:not(:last-child) {
        margin-right: 30px;
    }

    &:hover {
        color: rgba(0, 0, 0, 0.75);
    }
`

export const NavItemButton = styled(Button).attrs(() => ({ outline: true }))`
    padding: 10px 25px;
`
