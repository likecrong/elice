describe('Test loginFail', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
	
	//3. login 실패 후, login 페이지로 이동
	it('login Fail 1', () => {
        cy.get('input[name="loginId"]').type('like.crong@gmail.com')
		cy.get('input[name="password"]').type('nananono!02') //잘못된 비밀번호
		cy.get('button[id="mui-3"]').click()

        cy.wait(1000)
    })
	it('login Fail 2', () => {
        cy.get('input[name="loginId"]').type('like.crong2@gmail.com') //잘못된 ID : 잘못된 이메일
		cy.get('input[name="password"]').type('nananono!01') 
		cy.get('button[id="mui-3"]').click()

        cy.wait(1000)
    })
	it('login Fail 3', () => {
        cy.get('input[name="loginId"]').type('like.crong') //잘못된 ID : 이메일 형식이 아님
		cy.get('input[name="password"]').type('nananono!01')
		cy.get('button[id="mui-3"]').click()

        cy.wait(1000)
    })
	it('login Fail 4', () => {
		cy.get('button[id="mui-3"]').click()
        cy.wait(1000)
    })
})