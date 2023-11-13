describe('homepage flow', () => {
  beforeEach(() => {
    cy.visit('/inicio')
  })
  it('user goes to homepage', () => {
    cy.visit('/inicio')
    cy.get('[data-test="heroSection"]').should('be.visible')
    cy.get('[data-test="aboutUsSection"]').should('be.visible')
    cy.get('[data-test="servicesSection"]').should('be.visible')
    cy.get('[data-test="faqSection"]').should('be.visible')
    cy.get('[data-test="contactSection"]').should('be.visible')
    cy.get('[data-test="footerSection"]').should('be.visible')
    cy.get('[data-test="accordion-1"]').click()
  })

 

  it('user navigates using navbar', () => {
    // Check "Inicio" link
    cy.get('[id="navElement-1"]').click()
    cy.url().should('include', '/inicio')
    cy.contains(/Cuida Tu Vista y Tu Audición/i).should('be.visible')

    // Check "Quienes Somos" link
    cy.get('[id="navElement-2"]').click()
    cy.url().should('include', '/sobreNosotros')
    cy.contains(/En nuestra clínica, no solo nos preocupamos/i).should('be.visible')

    // Check "Servicios" link
    cy.get('[id="navElement-3"]').click()
    cy.url().should('include', '/servicios')
    cy.contains(/En nuestra clínica, nos especializamos en ofrecer exámenes/i).should('be.visible')


    // Check "Contacto" link
    cy.get('[id="navElement-4"]').click()
    cy.url().should('include', '/contacto')
    cy.contains(/Haz una pregunta/i).should('be.visible')


    // Check "FAQ" link
    cy.get('[id="navElement-5"]').click()
    cy.url().should('include', '/inicio/#faq')
    cy.contains(/Preguntas Frecuentes/i).should('be.visible')
  })




  it('user navigates with buttons and anchor tags on page', () => {
    cy.get('[id="btn-aboutUs"]').click()
    cy.url().should('include', '/sobreNosotros')
    cy.contains(/En nuestra clínica, no solo nos preocupamos/i).should('be.visible')
  })
   
  it('user navigates to "Servicios" page using button', () => {
    cy.get('[id="btn-services"]').click()
    cy.url().should('include', '/servicios')
    cy.contains(/En nuestra clínica, nos especializamos en ofrecer exámenes/i).should('be.visible')
  })
  it('user navigates to "Contact" page using map button button', () => {
    cy.get('[id="btn-contact"]').click()
    cy.url().should('include', '/contacto')
    cy.contains(/Haz una pregunta/i).should('be.visible')
  })

  it('user navigates to "Inicio" page using logo button', () => {
    cy.get('[id="btn-logoInicio"]').click()
    cy.url().should('include', '/inicio')
    cy.contains(/Cuida Tu Vista y Tu Audición/i).should('be.visible')
  })
  it('user navigates to "Instagram clients" page using icon button', () => {
    cy.get('[id="instagramNav"]').should('have.attr', 'href', 'https://www.instagram.com/optiaudiocr/')
  })
  it('user navigates to "facebook clients" page using icon button', () => {
    cy.get('[id="facebookNav"]').should('have.attr', 'href', 'https://www.facebook.com/optiaudiocr')
  })

})