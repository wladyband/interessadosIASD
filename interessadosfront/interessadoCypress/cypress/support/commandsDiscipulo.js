
import loc from './locators'

Cypress.Commands.add('salvarDiscipulo', (nome, endereco, telefone, origem) => {
    cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NO_CALENDARIO).click() 
    cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_DATA).click()
    cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_NOME_DO_DISCIPULO).type(nome) 
    cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_O_ENDERECO_DO_DISCIPULO).type(endereco)
    cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_TIPO_INTERESSE).click()
    cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NO_TIPO_INTERESSE).click()
    cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_TIPO_ATENDIMENTO).click() 
    cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NA_OPCAO_PEQUENO_GRUPO).click()
    cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_DISCIPULADORES).click()
    cy.get(loc.CADASTRAR_DISCUPULOS.SELECIONAR_FLAVIA).click()
    cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_O_TELEFONE).type(telefone)
    cy.get(loc.CADASTRAR_DISCUPULOS.ESCREVER_A_ORIGEM).type(origem)
    cy.get(loc.CADASTRAR_DISCUPULOS.CLICAR_NO_BOTAO_SALVAR).click()
})

Cypress.Commands.add('baseUrl', (url) => {
    'localhost:8080'+ url
})

