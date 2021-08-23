/// <reference types ="cypress" />

const { find } = require("cypress/types/lodash")

it('should navigate to the Little Caesars Prod Web App', () => {
    cy.visit('https://littlecaesars.com/')
    cy.get('.StartYourOrderstyle__Flip-sc-14sb6f0-0 > .sc-htpNat').should('have.text', 'Start your order')
})

it('should be able to navigate to delivery page', () => {
    cy.visit('https://littlecaesars.com/')
    cy.get('[data-testid=homePage__delivery-link]').click()   
})

// it('has ability to enter delivery address', () => {
//     cy.visit('https://littlecaesars.com/')
//     cy.get('[data-testid=homePage__delivery-link]').click()
//     cy.get('[data-testid=locator__deliveryAddr-field]').click()
//     cy.get('[data-testid=locator__deliveryAddr-field]').type('111 Monument Cir, Indianapolis, IN 46204')
//     //cy.get('#\30 typeAheadPrediction').click()
// })

// it('has ability to select delivery address', () => {
//     cy.visit('https://littlecaesars.com/')
//     cy.get('[data-testid=homePage__delivery-link]').click()
//     cy.get('[data-testid=locator__deliveryAddr-field]').click()
//     cy.get('[data-testid=locator__deliveryAddr-field]').type('111 Monument Cir, Indianapolis, IN 46204')
//     cy.get('[data-testid=delivery__addrPrediction]').click()
// })

// it('should be able to navigate to pickup page', () => {
//     cy.visit('https://littlecaesars.com/')
//     cy.get('[data-testid=homePage__pickup-link]').click()
//     cy.get('[data-testid=locator__pickup]').click()
//     cy.get('[data-testid=locator__pickup]').type('111 Monument Cir, Indianapolis, IN 46204')
// })

// it('should be able to find a location nearest to your address', () => {
//     cy.visit('https://littlecaesars.com/')
//     cy.get('[data-testid=homePage__pickup-link]').click()
//     cy.get('[data-testid=locator__pickup]').click()
//     cy.get('[data-testid=locator__pickup]').type('111 Monument Cir, Indianapolis, IN 46204')
//     cy.get('[data-testid=locator__pickup-find-store]').click()
// })