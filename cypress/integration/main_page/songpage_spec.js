describe('Songs Page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(2000);
  });

  it('should return a full song list without search', () => {
    cy.get('[data-cy=song-info]').should('have.length', 5);
    cy.get('[data-cy=page-number-next]').click();
    cy.get('[data-cy=song-info]').should('have.length', 5);
    cy.get('[data-cy=page-number-next]').click();
    cy.get('[data-cy=song-info]').should('have.length', 1);
    cy.get('[data-cy=page-number]')
      .should('contain', '3')
      .should('contain', '2')
      .should('contain', '1')
      .should('have.length', 3);
  });

  it('should return a song list page only have 1 page result by searching keyword', () => {
    cy.get('[data-cy=search-bar]> input').type('Awaki', { force: true });
    cy.get('[data-cy=song-info]')
      .should('contain', 'Awaki-Waki')
      .should('have.length', 1);
    cy.get('[data-cy=page-number]')
      .should('contain', '1')
      .should('have.length', 1);
  });

  it('should return a song list page only have 2 page result by searching keyword', () => {
    cy.get('[data-cy=search-bar]> input').type('a', { force: true });
    cy.get('[data-cy=song-info]')
      .should('contain', 'Lycanthropic Metamorphosis')
      .should('contain', 'A New Kennel')
      .should('contain', 'Awaki-Waki')
      .should('contain', 'Opa Opa Ta Bouzoukia')
      .should('have.length', 5);
    cy.get('[data-cy=page-number-next]').click();
    cy.get('[data-cy=song-info]')
      .should('contain', 'Alabama Sunrise')
      .should('contain', 'Buy Me Skills')
      .should('contain', 'Vivaldi Allegro Mashup')
      .should('contain', 'Babysitting')
      .should('have.length', 4);
    cy.get('[data-cy=page-number]')
      .should('contain', '1')
      .should('contain', '2')
      .should('have.length', 2);
  });
});
