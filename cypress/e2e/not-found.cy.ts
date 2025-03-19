describe('not found', () => {
    it('not found', () => {
        cy.visit('/not-found')

        cy.contains('h1', 'Oops!')
        cy.get('p').eq(0).should('contain.text', 'Route not found')
        cy.get('p').eq(1).should('contain.text', 'Not Found')

        cy.get('a').eq(0).should('contain.text', 'Back to home')
    })

    it('not found - click on back to home link', () => {
        cy.visit('/not-found')

        cy.get('a').eq(0).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/')

        cy.contains('h1', 'Hello from React!👋')
        cy.get('h1').should('not.contain.text', 'Not Found')

        cy.get('li').first().should('contain.text', 'Home')
        cy.get('li').last().should('contain.text', 'Another page')
    })
})
