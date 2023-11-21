describe('Test loginSuccess', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
	
	//login 성공 후, account 설정페이지로 이동
	it('login Success', () => {
        cy.get('input[name="loginId"]').type('like.crong@gmail.com')
		cy.get('input[name="password"]').type('nananono!01')
		cy.get('button[id="mui-3"]').click()

        cy.wait(1000)
    })
})
