import React from 'react'
import styled from 'styled-components'

import { ImgPlaceholder } from '../../../components/ImgPlaceholder'

export const Page = styled.div`
    display: flex;
    height: 100%;
`

export const PageMain = styled.main`
    flex: 4;
    display: flex;
    flex-direction: column;
`

export const Avatar = ({ name, restaurant }) => (
    <StyledAvatar>
        <ImgPlaceholder height="40" width="40" borderRadius="20" />
        <div>
            <p>{name}</p>
            <span>{restaurant}</span>
        </div>
    </StyledAvatar>
) 

const StyledAvatar = styled.div`
    display: flex;
    padding: 35px;
    height: 5%;
    border-bottom: #d1d1d1 solid 2px;

    div { 
        margin-left: 10px;
    }

    p { 
        font-weight: 600;
        font-size: 1.1em;
    }

    span { 
        font-size: 0.9em;
    }
`

export const Button = styled.button``

export const Dashboard = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
`

export const DashboardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 50px 40px 20px 40px;
`

export const MenuItem = ({ name, icon: Icon }) => (
    <StyledMenuItem>
        { Icon && <Icon /> }
        <h4>{name}</h4>
    </StyledMenuItem>
)

const StyledMenuItem = styled.div`
    display: flex;
    align-items: center;

    margin-bottom: 25px;

    svg {
        font-size: 25px;
        margin-right: 8px;
    }

    h4 { 
        font-size: 20px;
        font-weight: 400;
    }
`

export const MenuItems = ({ children }) => (
    <StyledMenuItems>
        <ul>{children}</ul>
    </StyledMenuItems>
)

const StyledMenuItems = styled.nav`
    padding: 35px;
    margin-top: 20px;
`

export const Navbar = styled.nav`
    height: 5%;
    display: flex;
    flex-direction: row-reverse;
    padding: 35px;
    background-color: #f0f0f0;
    border-bottom: #d1d1d1 solid 2px;
`

export const Sidemenu = styled.aside`
    flex: 1;
    height: 100%;
    background-color: #f0f0f0;
    border-right: #d1d1d1 solid 2px;
`

export const HeaderTitle = styled.h2`
    font-size: 50px;
    font-weight: 400;
`