
context('Login', () => {
    beforeEach(() => {
        cy.visit('https://finance.dev.fabrique.studio/')
    })

    it('Login with valid login and password', () => {
        // https://on.cypress.io/type
        cy.login('business@business.com', '123123')
        cy.get('div[class="pageLayout__header"] > h1')
            .should('contain.text', 'Платежи')
    })
})
