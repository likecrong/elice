describe('Test of login page', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
	
	//1. 앱 로드 확인
	it('load check', () => {
		cy.get('input[name="loginId"]') // 이메일 필드 확인
		cy.get('input[name="password"]') // 비밀번호 필드 확인
			
		cy.wait(3000)
    })
	
	
})
