describe('Test translator', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
	
	//2. 한국어 및 영어 전환
	it('translate', () => {
		cy.get('select').select('en') // 영어로 전환
        cy.wait(6000)
		cy.get('select').select('ko') // 한국어로 전환
		cy.wait(6000)
    })
	
})