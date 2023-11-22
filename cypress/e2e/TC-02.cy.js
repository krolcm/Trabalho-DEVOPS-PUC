describe('Acessar a Amazon', () => {
    it('Deve abrir a página da Amazon, pesquisar por "Devops" e acessar o link "Manual de DevOps"', () => {
      // Visitar a página da Amazon
      cy.visit('https://amazon.com.br/');
      // Digitar "Devops" na caixa de pesquisa
      cy.get('#twotabsearchtextbox').type('Devops');
      // Clicar no botão de pesquisa
      cy.get('#nav-search-submit-button').click();
      // Aguardar resultados da pesquisa
      cy.wait(2000); // Tempo de espera (ajuste conforme necessário)
      // Clicar no link "Manual de DevOps"
      cy.contains('Manual de DevOps').click(); 
      cy.get('#add-to-cart-button').click();
    })
  })