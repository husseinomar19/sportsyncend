describe('template spec', () => {
  it('passes', () => {
    // Bezoek de URL
    cy.visit('http://localhost:3000/')
    
    // Klik op de Log In link
    cy.get('li a[href="/inlog"]').click()
    
    // Verifieer dat de URL is veranderd naar /inlog
    cy.url().should('include', '/inlog')
    
    // Vul het e-mail invoerveld
    cy.get('input[name="email"]').type('julian.janssen@gmail.com')
    
    // Vul het wachtwoord invoerveld
    cy.get('input[name="wachtwoord"]').type('1234567')
    
    // Klik op de submit knop
    cy.get('input[type="submit"]').click()
    
    // Verifieer dat de URL is veranderd naar /gebruikers
    cy.url().should('include', '/gebruikers')
    
    // Scroll een beetje naar beneden
    cy.scrollTo('bottom', { duration: 10 })
    
    // Klik op de eerste gevonden comment afbeelding
    cy.get('img[alt="comment"]').first().click()
    
    // Type 'test' in het eerste gevonden invoerveld met placeholder 'opmerking'
    cy.get('input[placeholder="opmerking"]').first().type('test')
    
    // Klik op de submit knop
    cy.get('input[type="submit"][value="Reageren"]').first().click()
    
    // Klik op de paragraaf met de class 'opmerkingen_lijst'
    cy.get('p.opmerkingen_lijst').first().click()
  })
})
