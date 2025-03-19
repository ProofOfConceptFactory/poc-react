describe('another page', () => {
    it('another page', () => {
        cy.visit('/another-page')

        cy.get('li').first().should('contain.text', 'Home')
        cy.get('li').last().should('contain.text', 'Another page')

        cy.contains('h1', 'Another page')
        cy.get('h1').should('not.contain.text', 'Hello from React!👋')
    })

    it('another page - click on home link', () => {
        cy.visit('/another-page')

        cy.get('a').eq(0).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')

        cy.get('li').first().should('contain.text', 'Home')
        cy.get('li').last().should('contain.text', 'Another page')

        cy.contains('h1', 'Hello from React!👋')
        cy.get('h1').should('not.contain.text', 'Another page')
    })
})
