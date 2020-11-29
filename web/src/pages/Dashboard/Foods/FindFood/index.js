import React from 'react'
import { useHistory } from 'react-router-dom'

import { DashboardTemplate } from '../../components/DashboardTemplate'

export const DashboardFindFood = () => {
    const history = useHistory()

    const goToCreateFoodPage = () => {
        history.push('/dashboard/foods/create')
    }

    return (
        <DashboardTemplate
            title="Lista de comidas"
            hasSpecialAction
            specialActionTitle="Cadastrar comida"
            onSpecialActionButtonClicked={goToCreateFoodPage}>
            <p>Lista</p>
        </DashboardTemplate>
    )
}
