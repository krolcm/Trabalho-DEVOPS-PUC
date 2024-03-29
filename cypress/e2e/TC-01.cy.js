describe('Acessar a Amazon', () => {

  it('Deve abrir a página da Amazon e digitar a pesquisa', () => {
    cy.visit('https://amazon.com.br/');
    cy.get('#twotabsearchtextbox').type('Devops');
    cy.get('#nav-search-submit-button').click();
  })
})
    it('Deve abrir a página da Amazon, pesquisar por "Devops" e acessar o link "Manual de DevOps"', () => {
      cy.visit('https://amazon.com.br/');
      cy.wait(5000);
      // Digitar "Devops" na caixa de pesquisa
      cy.get('#twotabsearchtextbox').type('Devops');
      // Clicar no botão de pesquisa
      cy.get('#nav-search-submit-button').click();
      cy.wait(2000); // Tempo de espera (ajuste conforme necessário)
      // Clicar no link "Manual de DevOps"
      cy.contains('Manual de DevOps').click(); 
      // Adicionar livro ao carrinho 
      cy.get('#add-to-cart-button').click();
      // Verificar se a mensagem "Adicionado ao carrinho" está presente
      cy.get('.a-size-medium-plus')
        .should('contain.text', 'Adicionado ao carrinho');
    })


