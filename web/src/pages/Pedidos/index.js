import React from 'react'

import { 
    Navbar, Button, Sidemenu, Avatar,
    MenuItems, MenuItem, Dashboard,
    DashboardHeader, Board, BoardColumn, 
    ColumnTitle, ColumnCard, HeaderTitle
} from './styled'

export const Pedidos = () => {
    return (
        <>
            <Navbar>
                <Button>Sair</Button>
            </Navbar>
            <Sidemenu>
                <Avatar name="Maria" restaurant="Pizzaria 2 Irmãos" />
                <MenuItems>
                    <MenuItem name="Pedidos" icon="" />
                    <MenuItem name="Histórico" icon="" />
                    <MenuItem name="Comidas" icon="" />
                    <MenuItem name="Restaurante" icon="" />
                </MenuItems>
            </Sidemenu>
            <Dashboard>
                <DashboardHeader>
                    <HeaderTitle>Pedidos</HeaderTitle>
                    <Button>Encerrar expediente</Button>
                </DashboardHeader>
                <Board>
                    <BoardColumn>
                        <ColumnTitle>À fazer</ColumnTitle>
                        <ColumnCard/>
                    </BoardColumn>
                    <BoardColumn>
                        <ColumnTitle>Fazendo</ColumnTitle>
                        <ColumnCard/>
                    </BoardColumn>
                    <BoardColumn>
                        <ColumnTitle>Entregando</ColumnTitle>
                        <ColumnCard/>
                    </BoardColumn>
                    <BoardColumn>
                        <ColumnTitle>Concluído</ColumnTitle>
                        <ColumnCard/>
                    </BoardColumn>
                </Board>
            </Dashboard>
        </>
    )
}