import React from 'react'

import { DashboardTemplate } from '../components/DashboardTemplate'
import { Board, BoardColumn, ColumnTitle, ColumnCard, ColumnCards} from './styled'

export const RestaurantOrders = () => {
    return (
        <DashboardTemplate title="Pedidos">
            <Board>
                <BoardColumn>
                    <ColumnTitle>À fazer</ColumnTitle>
                    <ColumnCards>
                        <ColumnCard
                            id="1944"
                            items={[
                                { id: 1, checked: false, name: '1 Hamburguer X' }
                            ]} 
                        />
                        <ColumnCard
                            id="1945"
                            items={[
                                { id: 2, checked: false, name: '1 Hamburguer X' },
                                { id: 3, checked: false, name: '1 Hamburguer Y' }
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
                                { id: 4, checked: true, name: '1 Pizza' }
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
                                { id: 5, checked: true, name: '1 Pizza' }
                            ]} 
                        />
                    </ColumnCards>
                </BoardColumn>
            </Board>
        </DashboardTemplate>
    )
}
