/// <reference types="cypress" />

import loc from '../../support/locators'
import '../../support/commandsDiscipulo'

describe('acesso padrao',  () => {

    before(() => {
        cy.visit('/discipulos')
    })

    it('teste de acesso ao menu', () => {
        cy.get(loc.SISTEMA.MENU).click()
        cy.get(loc.SISTEMA.DASHBOARD).should('have.text','Dashboard')
        cy.get(loc.SISTEMA.FECHAR_MENU).click()
    })

    it('teste selecionamento de discipuladores', () => {
        cy.visit('/discipulo/novo')
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_DISCIPULADORES).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_FLAVIA).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.VARIFICAR_FLAVIA_COMO_SELECIONADO).should('contain','Flávia')
    })
    

    it('salvando discipulo', () => {
        cy.visit('/discipulo/novo')
        cy.salvarDiscipulo(
            'Gildo teste LT', 
            'Rua João adinaldo da Cunha', 
            '11956892345', 
            'Convite de Flávia')
        cy.get(loc.CADASTRAR_DISCUPULOS.MENSAGEM_SUCESSO).should('contain', 'Discipulo adicionado com sucesso!')
    })
})
