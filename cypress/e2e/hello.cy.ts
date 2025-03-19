describe('hello from react', () => {
    it('hello from react - home', () => {
        cy.visit('/')

        cy.get('li').first().should('contain.text', 'Home')
        cy.get('li').last().should('contain.text', 'Another page')

        cy.contains('h1', 'Hello from React!👋')
    })

    it('hello from react - click on another page link', () => {
        cy.visit('/')

        cy.get('a').eq(1).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/another-page')

        cy.get('li').first().should('contain.text', 'Home')
        cy.get('li').last().should('contain.text', 'Another page')

        cy.get('h1').should('not.contain.text', 'Hello from React!👋')
        cy.contains('h1', 'Another page')
    })
})
