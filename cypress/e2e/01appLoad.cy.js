describe('Test appload', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
	
	//1. 앱 로드 확인
	it('appLoad check', () => {
		cy.get('input[name="loginId"]') // 이메일 필드 확인
		cy.get('input[name="password"]') // 비밀번호 필드 확인
		//cy.get('button[aria-label="비밀번호 보기"]') // 비밀번호 보기 버튼 확인
		//cy.get('[class="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineHover css-q6237f"]').contains('비밀번호를 잊어버리셨나요?') // '비밀번호를 잊어버리셨나요?' 필드 확인
		
		cy.get('button[id="mui-3"]').contains('로그인')	 // '로그인' 버튼 필드 확인
		
		// '회원가입' 필드 확인
		cy.get('[class="css-16k01br e1t19hrb0"]').contains('아직 계정이 없으신가요?')
		cy.get('[class="css-16k01br e1t19hrb0"]').contains('회원가입')

		cy.wait(3000)
    })
})
