describe('template spec', () => {
  it('should like a post', () => {
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
    cy.scrollTo('bottom', { duration: 30 })

    // Controleer of het aantal likes 10 is en klik vervolgens op de like-knop
    cy.get('.posten_items').first().within(() => {
      // Verifieer dat het aantal likes 10 is
      cy.get('.post_like p').contains(' Likes').then(($p) => {
        const likesText = $p.text();
        const likes = parseInt(likesText.split(' ')[0]);
        expect(likes).to.equal(15);
      })

      // Klik op de like-knop
      cy.get('[data-testid="like-button"]').should('be.visible').click()
      cy.get('[data-testid="like-button"]').should('be.visible').click()

      // Verifieer dat het aantal likes 11 is geworden
      cy.get('.post_like p').contains(' Likes').then(($p) => {
        const likesText = $p.text();
        const likes = parseInt(likesText.split(' ')[0]);
        expect(likes).to.equal(15);
      })
    })
  })
})
