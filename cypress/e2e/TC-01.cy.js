describe('Acessar a Amazon', () => {
  it('Deve abrir a página da Amazon e digitar a pesquisa', () => {
    cy.visit('https://amazon.com.br/');
    cy.get('#twotabsearchtextbox').type('Devops');
    cy.get('#nav-search-submit-button').click();
  })
})