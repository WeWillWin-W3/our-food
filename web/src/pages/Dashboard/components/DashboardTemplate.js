import React from 'react'
import { MdAssessment, MdAssignmentTurnedIn, MdLocalPizza, MdStoreMallDirectory } from 'react-icons/md'

import { Button } from '../../../components/Button'
import {
    Navbar, Sidemenu, Avatar,
    MenuItems, MenuItem, Dashboard,
    DashboardHeader, HeaderTitle,
    Page, PageMain
} from './index'

export const DashboardTemplate = ({ children, title, hasSpecialAction,
                                    specialActionTitle, onSpecialActionButtonClicked }) => {
    return (
        <Page>
            <Sidemenu>
                <Avatar name="Maria" restaurant="Pizzaria 2 Irmãos" />
                <MenuItems>
                    <MenuItem name="Pedidos" icon={MdAssignmentTurnedIn} />
                    <MenuItem name="Histórico" icon={MdAssessment} />
                    <MenuItem name="Comidas" icon={MdLocalPizza} />
                    <MenuItem name="Restaurante" icon={MdStoreMallDirectory} />
                </MenuItems>
            </Sidemenu>
            <PageMain>
                <Navbar>
                    <Button outline>Sair</Button>
                </Navbar>
                <Dashboard>
                    <DashboardHeader>
                        <HeaderTitle>{title}</HeaderTitle>
                        {
                            hasSpecialAction &&
                            <Button
                                onClick={onSpecialActionButtonClicked}
                                outline>
                                        {specialActionTitle}
                            </Button>
                        }
                    </DashboardHeader>
                    {children}
                </Dashboard>
            </PageMain>
        </Page>
    )
}
