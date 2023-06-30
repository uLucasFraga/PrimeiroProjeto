///     <reference types="cypress" />         

describe('[Swag Labs] :: TESTS UI', () => {
        beforeEach(() => {
                cy.visit('https://www.saucedemo.com')
        });

        it('Login', () => {
                cy.get('[id=user-name]').type('standard_user')
                cy.get('[name=password]').type('secret_sauce')
                cy.contains('Login').click()
                cy.contains('Swag Labs').should('be.visible')

        });
        it('Add to cart 1', () => {
                cy.get('#user-name').type('standard_user')
                cy.get('[name=password]').type('secret_sauce')
                cy.contains('Login').click()
                cy.get('#add-to-cart-sauce-labs-backpack').click()

        });
        it('Acessar o carrinho', () => {
                cy.get('#user-name').type('standard_user')
                cy.get('[name=password]').type('secret_sauce')
                cy.contains('Login').click()
                cy.get('#add-to-cart-sauce-labs-backpack').click()
                cy.get('#shopping_cart_container').click
                cy.contains('Sauce Labs Backpack').should('be.visible')

        });
        it('Remover do Carrinho', () => {
                cy.get('#user-name').type('standard_user')
                cy.get('[name=password]').type('secret_sauce')
                cy.contains('Login').click()
                cy.get('#add-to-cart-sauce-labs-backpack').click()
                cy.get('#shopping_cart_container').click
                cy.contains('Sauce Labs Backpack').should('be.visible')
                cy.get('#remove-sauce-labs-backpack').click()

                it('Acessar o carrinho e chekout', () => {
                        cy.get('#user-name').type('standard_user')
                        cy.get('[name=password]').type('secret_sauce')
                        cy.contains('Login').click()
                        cy.get('#shopping_cart_container').click()
                        cy.get('#checkout').click()
                        cy.get('#first-name').type('Douglas')
                        cy.get('#last-name').type('Tavares')
                        cy.get('#postal-code').type('21931090')
                        cy.get('#continue').click()
                        cy.contains('Total: $0.00').should('be.visible')
                        cy.get('#finish').click()
                        cy.contains('Thank you for your order!').should('be.visible')

                });
        });
});
