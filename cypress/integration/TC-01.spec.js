describe('Acessar o Google', () => {
    it('Deve abrir a página do Google', () => {
      // Visitar a página do Google
      cy.visit('https://google.com')
      cy.get('#APjFqb').type('Devops')
      cy.get('#APjFqb').type('{enter}')
    })
  })