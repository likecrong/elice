describe('Test appload', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
		
	//1. 상단 부 로고 확인
	it('logo check', () => {
		cy.get('[class="css-1xknvyq e1btkj5w1"]') 
    })
})
