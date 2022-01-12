/// <reference types="cypress" />

import '../../support/commandsDiscipulo'

describe('testes de endpoints', () => {

    it('Listar Discipulos', () => {
        cy.request({
            url: 'localhost:8080/discipulos', 
            method: 'GET',
        }).then(res => {
            let status = ''
            if(res.statusText === 'OK'){
                status = res.statusText
            }

            expect(status).to.be.equal('OK')
        })
    })

    
    it('Cadastrar Discipulos', () => {
        cy.request({
            url: 'localhost:8080/discipulos', 
            method: 'POST',
            body: {
                'nome':'Wladimir Bandeira',
                'logradouro':'Rua das tanstas 7',
                'telefone':'(56)56665-6565',
                'dataNascimento':'2021-09-08',
                'origem':'sjdcnbjksdnbckndskncjdsc',
                'tipo_interesse':{
                    'codigo':1,
                },
                'tipo_atendimento':{
                    'codigo':1,
                },
                'discipulador':{
                    'codigo':1,
                }
            }
        }).then(res => {
            let status = ''
            if(res.status === 201){
                status = res.status
            }

            expect(status).to.be.equal(201)
        })
    })
})



