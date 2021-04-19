describe('Testing battle app: ', () => {
	beforeEach(() => {
		cy.visit('/')
	})

	it('Displays main page on initial load', () => {
		cy.contains('Enter name for player 1');
		cy.get('#name-input-player1').should('be.visible')
		cy.contains('Enter name for player 2');
		cy.get('#name-input-player2').should('be.visible')
		cy.get('#name-submit').should('have.value', 'Confirm Names');
	})

	it('Enters battle page after names are confirmed', () => {
		cy.get('#name-input-player1').type('James')
		cy.get('#name-input-player2').type('John')
		cy.get('#name-submit').click();
		cy.url().should('include', '/battle')
		cy.contains('James - 100HP')
		cy.contains('John - 100HP')
	})
})