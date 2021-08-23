/// <reference types ="cypress" />

it('should navigate to the Little Caesars Prod Web App', () => {
    cy.visit('https://littlecaesars.com/')
})

it('should be able to navigate to delivery page', () => {
    cy.visit('https://littlecaesars.com/')
    cy.get('[data-testid=homePage__delivery-link]').click()
})
