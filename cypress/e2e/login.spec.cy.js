/// <reference types="cypress"/>

const user = require('../fixtures/user.json')

describe('template spec', () => {

  it('Must log in successfully - Using bulk data', () => {
    cy.visit('minha-conta')
    cy.get("[name='username']").type(user.userSuccess.email, { log: false })
    cy.get("[autocomplete='current-password']").type(user.userSuccess.password, { log: false })
    cy.get("[name='login']").click()
    cy.get('body').should('contain', 'A partir do painel de controle de sua conta, você pode ver suas compras recentes, gerenciar seus endereços de entrega e faturamento, e editar sua senha e detalhes da conta.')
  })

  it('Login - Fail', () => {
    cy.visit('minha-conta')
    cy.get("[name='username']").type(user.userFail.email, { log: false })
    cy.get("[autocomplete='current-password']").type(user.userFail.password, { log: false })
    cy.get("[name='login']").click()
    cy.get('body').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')

  });

     })
  