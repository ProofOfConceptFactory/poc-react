describe('hello from react', () => {
    it('check h1 contains Hello from React', () => {
        cy.visit('/')
        cy.contains('h1', 'Hello from React!👋')
    })
})
