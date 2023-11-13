describe('Email form flow', () => {
    beforeEach(() => {
        cy.visit('/inicio')
      })
      it('user clicks form empty', () => {
        cy.get('[id="btn-openForm"]').click()
        cy.contains(/Haz una pregunta/i).should('be.visible')
        cy.get('[placeHolder="Tu nombre*"]').should('be.visible')
        cy.get('[placeHolder="Tu correo*"]').should('be.visible')
        cy.get('[placeHolder="Tu teléfono*"]').should('be.visible')
        cy.get('[placeHolder="Tu mensaje*"]').should('be.visible')

        cy.get('[id="btn-sendEmail"]').click()
      })
      it.only('user clicks form recibes a succes message', () => {
        cy.get('[id="btn-openForm"]').click()
        cy.get('[placeHolder="Tu nombre*"]').type('TEST').blur()
        cy.get('[placeHolder="Tu correo*"]').type('test@example.com').blur()
        cy.get('[placeHolder="Tu teléfono*"]').type('1433453').blur()
        cy.get('[placeHolder="Tu mensaje*"]').type('Hola esto es un test').blur()
        cy.get('[id="btn-sendEmail"]').click().then(() => {
            cy.contains(/Tu correo fue enviado/i).should('be.visible')
            cy.get('[id="btn-emailOk"]').click()
            cy.contains(/Tu correo fue enviado/i).should('not.exist')
        })
  })

})