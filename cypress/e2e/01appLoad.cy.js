describe('Test appload', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
		
	//1. 상단 부 로고 확인
	it('logo check', () => {
		cy.get('[class="css-1xknvyq e1btkj5w1"]')
    })
	//2. 중반 부 확인
	it('middle check', () => {
		
		//2-1. 입력 form 칸
		cy.get('input[name="loginId"]').should('have.focus') // 이메일 필드 확인
		cy.get('input[name="password"]').should('have.focus') // 비밀번호 필드 확인
		cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium  e15piai01 css-ydj31v"]') // 비밀번호 보기 버튼
		cy.get('[class="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineHover css-q6237f"]').should('have.attr', 'href') // '비밀번호를 잊어버리셨나요?' 링크 확인
		cy.get('button[id="mui-3"]').click()	 // '로그인' 버튼 확인
		
		//2-2. 또는
		//cy.get('[class="css-fwbfcf ex72zvc0"]').should('have.value', '또는')
		
		//2-3. 다른 사이트를 이용한 로그인
		
		
    })
})
