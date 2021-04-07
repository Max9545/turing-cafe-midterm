describe('Res Maker', () => {
  it('SHould Have a header', () => {
    cy.visit('http://localhost:3000')
    .get('h1').should('contain', 'Turing Cafe Reservations')
  })
})