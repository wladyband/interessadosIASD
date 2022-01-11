/// <reference types="cypress" />

import loc from '../../support/locators'

describe('acesso padrao',  () => {

    before(() => {
        cy.visit(loc.URL.LISTA_DISCIPULOS)
    })

    it('teste de acesso ao menu', () => {
        cy.get(loc.SISTEMA.MENU).click()
        cy.get(loc.SISTEMA.DASHBOARD).should('have.text','Dashboard')
        cy.get(loc.SISTEMA.FECHAR_MENU).click()
    })

    it('teste selecionamento de discipuladores', () => {
        cy.visit(loc.URL.CADASTRO_DISCIPULOS)
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_DISCIPULADORES).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_FLAVIA).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.VARIFICAR_FLAVIA_COMO_SELECIONADO).should('contain','Flávia')
    })

    it('salvando discipulo', () => {
        cy.visit(loc.URL.CADASTRO_DISCIPULOS)
        cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NO_CALENDARIO).click() 
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_DATA).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_NOME_DO_DISCIPULO).type('Gildo teste LT') 
        cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_O_ENDERECO_DO_DISCIPULO).type('Rua João adinaldo da Cunha')
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_TIPO_INTERESSE).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NO_TIPO_INTERESSE).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_TIPO_ATENDIMENTO).click() 
        cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NA_OPCAO_PEQUENO_GRUPO).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_DISCIPULADORES).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_FLAVIA).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_O_TELEFONE).type('11956892345')
        cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_A_ORIGEM).type('Convite de Flávia')
        cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NO_BOTAO_SALVAR).click()
        cy.get(loc.CADASTRAR_DISCUPULOS.MENSAGEM_SUCESSO).should('contain', 'Discipulo adicionado com sucesso!')
    })
})