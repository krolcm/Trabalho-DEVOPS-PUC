describe('Acessar o Google', () => {
    it('Deve abrir a página da Amazon', () => {
      // Visitar a página do Google
      cy.visit('https://amazon.com.br/');
      cy.get('.SDkEP').type('Devops');
      cy.get('.FPdoLc > center > .gNO89b').click();
    })
  })