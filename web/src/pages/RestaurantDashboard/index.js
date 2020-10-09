import React from 'react'
import { MdAssessment, MdAssignmentTurnedIn, MdLocalPizza, MdStoreMallDirectory } from 'react-icons/md'

import { Button } from '../../components/Button'
import { 
    Navbar, Sidemenu, Avatar,
    MenuItems, MenuItem, Dashboard,
    DashboardHeader, Board, BoardColumn, 
    ColumnTitle, ColumnCard, HeaderTitle,
    Page, PageMain, ColumnCards
} from './styled'

export const RestaurantDashboard = () => {
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
                        <HeaderTitle>Pedidos</HeaderTitle>
                        <Button outline>Encerrar expediente</Button>
                    </DashboardHeader>
                    <Board>
                        <BoardColumn>
                            <ColumnTitle>À fazer</ColumnTitle>
                            <ColumnCards>
                                <ColumnCard
                                    id="1944"
                                    items={[
                                        { checked: false, name: '1 Hamburguer X' }
                                    ]} 
                                />
                                <ColumnCard
                                    id="1945"
                                    items={[
                                        { checked: false, name: '1 Hamburguer X' },
                                        { checked: false, name: '1 Hamburguer Y' }
                                    ]} 
                                />
                            </ColumnCards>
                        </BoardColumn>
                        <BoardColumn>
                            <ColumnTitle>Fazendo</ColumnTitle>
                            <ColumnCards>
                                <ColumnCard
                                    id="1943"
                                    items={[
                                        { checked: true, name: '1 Pizza' }
                                    ]} 
                                />
                            </ColumnCards>
                        </BoardColumn>
                        <BoardColumn>
                            <ColumnTitle>Entregando</ColumnTitle>
                            <ColumnCards>
                            </ColumnCards>
                        </BoardColumn>
                        <BoardColumn>
                            <ColumnTitle>Concluído</ColumnTitle>
                            <ColumnCards>
                                <ColumnCard
                                    id="1942"
                                    items={[
                                        { checked: true, name: '1 Pizza' }
                                    ]} 
                                />
                            </ColumnCards>
                        </BoardColumn>
                    </Board>
                </Dashboard>
            </PageMain>
        </Page>
        
    )
}
