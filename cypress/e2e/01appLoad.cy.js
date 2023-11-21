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
		cy.get('input[name="loginId"]') // 이메일 필드 확인
		cy.get('input[name="password"]') // 비밀번호 필드 확인
		cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium  e15piai01 css-ydj31v"]') // 비밀번호 보기 버튼
    })
})
