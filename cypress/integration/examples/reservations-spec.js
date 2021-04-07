describe('Res Maker', () => {
  it('Should Have a header', () => {
    cy.visit('http://localhost:3000')
    .get('h1').should('contain', 'Turing Cafe Reservations')
  })
  it('Make reservations', () => {
    cy.visit('http://localhost:3000')
    .get('input[name=name]').type('Max')
    .get('input[name=date]').type('11/2/21')
    .get('input[name=time]').type('7:30PM')
    .get('input[name=number]').type('9')
    .get('button').click()
    .get('.res-card').last()
    .get('h2').should('contain', 'Max')
  })
})