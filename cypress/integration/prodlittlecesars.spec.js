/// <reference types ="cypress" />

describe('Delivery Order, happy path', () => {
    beforeEach(() => {
        cy.visit('https://littlecaesars.com/')
    })

    it('should navigate to the Little Caesars Prod Web App', () => {
        cy.visit('https://littlecaesars.com/')
        cy.get('[data-testid=homePage__delivery-link]').should('have.attr', 'href')
        cy.get('.StartYourOrderstyle__Flip-sc-14sb6f0-0 > .sc-htpNat').should('have.text', 'Start your order')
    })

    it('should be able to navigate to delivery page', () => {
        cy.visit('https://littlecaesars.com/')
        cy.get('[data-testid=homePage__delivery-link]').click()
        cy.get('[data-testid=locator__delivery-link]').should('be.visible')
    })

    it('has ability to select delivery address', () => {
        cy.visit('https://littlecaesars.com/')
        cy.get('[data-testid=homePage__delivery-link]').click()
        cy.get('[data-testid=locator__deliveryAddr-field]').click()
        cy.get('[data-testid=locator__deliveryAddr-field]').type('111 Monument Cir, Indianapolis, IN 46204')
        cy.get('[data-testid=delivery__addrPrediction]').click()
        cy.get('[data-testid=locator__delivery-start-your-order]').should('be.visible')
        cy.get('[data-testid=locator__delivery-start-your-order]').click()
    })

    it('has ability to start order for delivery for custom pizza with bacon', () => {
        cy.visit('https://littlecaesars.com/')
        cy.get('[data-testid=homePage__delivery-link]').click()
        cy.get('[data-testid=locator__deliveryAddr-field]').click()
        cy.get('[data-testid=locator__deliveryAddr-field]').type('111 Monument Cir, Indianapolis, IN 46204')
        cy.get('[data-testid=delivery__addrPrediction]').click()
        cy.get('[data-testid=locator__delivery-start-your-order]').click()
        cy.get('[data-testid=menu__create-your-own-pizza]').should('be.visible')
        cy.get('[data-testid=menu__create-your-own-pizza]').click()
        cy.get('.sc-fATqzn > .sc-hgzKov > .sc-jhAzac > #select')
            .should('be.visible')
            .and('have.text', 'RoundThin CrustStuffed Crust RoundDEEP!DEEP!™ Dish')
        cy.get(':nth-child(5) > .cqTsbT > .dYBQNA > :nth-child(1) > .sc-EHOje > .sc-bdVaJa').click()
        cy.get(':nth-child(5) > .cqTsbT > .dYBQNA > :nth-child(1) > .sc-EHOje > .sc-bdVaJa')
            .should('not.be.enabled')
    })
})
