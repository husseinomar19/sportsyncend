describe('template spec', () => {
  it('passes', () => {
    // Bezoek de URL
    cy.visit('http://localhost:3000/')
    
    // Klik op de Log In link
    cy.get('li a[href="/inlog"]').click()
    
    // Verifieer dat de URL is veranderd naar /inlog
    cy.url().should('include', '/inlog')
    
    // Vul het e-mail invoerveld
    cy.get('input[name="email"]').type('hussein@gmail.com')
    
    // Vul het wachtwoord invoerveld
    cy.get('input[name="wachtwoord"]').type('123456')
    
    // Klik op de submit knop
    cy.get('input[type="submit"]').click()
    
    // Verifieer dat de URL is veranderd naar /gebruikers
    cy.url().should('include', '/gebruikers')
  })
})
