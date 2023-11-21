describe('Test loginFail', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
	
	//login 실패 후, login 페이지로 이동
	
	// 아이디와 매칭되지 않는 비밀번호를 입력할 때
	it('login Fail 1', () => {
        cy.get('input[name="loginId"]').type('like.crong@gmail.com')
		cy.get('input[name="password"]').type('nananono!02')
		cy.get('button[id="mui-3"]').click()

        cy.wait(1000)
    })
	
	// 아이디 입력시, 존재하지 않는 이메일을 입력할 때
	it('login Fail 2', () => {
        cy.get('input[name="loginId"]').type('like.crong2@gmail.com')
		cy.get('input[name="password"]').type('nananono!01') 
		cy.get('button[id="mui-3"]').click()

        cy.wait(1000)
    })
	
	// 아이디 입력시, 이메일 형식이 아닐 때
	it('login Fail 3', () => {
        cy.get('input[name="loginId"]').type('like.crong')
		cy.get('input[name="password"]').type('nananono!01')
		cy.get('button[id="mui-3"]').click()

        cy.wait(1000)
    })
	
	// 아이디와 비밀번호를 입력하지 않고 로그인 버튼을 누를 때
	it('login Fail 4', () => {
		cy.get('button[id="mui-3"]').click()
        cy.wait(1000)
    })
})
