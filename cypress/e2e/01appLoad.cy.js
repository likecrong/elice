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
		cy.get('input[name="loginId"]') // 이메일 필드 확인
		cy.get('input[name="password"]') // 비밀번호 필드 확인
		cy.get('[class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium  e15piai01 css-ydj31v"]') // 비밀번호 보기 버튼
		cy.get('[class="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineHover css-q6237f"]').should('have.attr', 'href') // '비밀번호를 잊어버리셨나요?' 링크 확인
		cy.get('button[id="mui-3"]').click()	 // '로그인' 버튼 확인
		
		//2-2. 또는
		cy.get('[class="css-fwbfcf ex72zvc0"]')
		
		//2-3. 다른 사이트를 이용한 로그인
		//새로운 화면창이 뜨는 버튼은 클릭하지 않음
		cy.get('button[aria-label="Kakao"]') // '카카오로 로그인' 버튼 확인
		cy.get('button[aria-label="Google"]') // '구글로 로그인' 버튼 확인
		
		cy.get('button[class="css-1n4x2a0 e1u3bopy0"]').click() // '접기' 버튼 확인 [열기]
		cy.get('button[aria-label="Microsoft"]') //'Microsoft' 버튼 확인
		cy.get('button[aria-label="Facebook"]') //'Facebook' 버튼 확인
		cy.get('button[aria-label="Naver"]') //'Naver' 버튼 확인
		cy.get('button[aria-label="Github"]') //'Github' 버튼 확인
		cy.get('button[aria-label="Apple"]') //'Apple' 버튼 확인
		cy.get('button[aria-label="Whalespace"]') //'Whalespace' 버튼 확인
		cy.get('button[class="css-1n4x2a0 e1u3bopy0"]').click() // '접기' 버튼 확인 [닫기]
		
		//2-4. 회원 가입
		cy.get('[class="css-16k01br e1t19hrb0"]')
			
		//2-5. footer
		cy.get('[class="sc-10xkpbs-3 sc-q8098a-3 dcmCxF kIYyiB"]') 
		// /*elice*/ 로고 이미지 확인
		cy.get('[class="eb-text eb-text--role-default eb-text--size-tiny"]').contains('약관 안내') 
		// '약관 안내' 확인
		cy.get('[class="eb-text eb-text--role-default eb-text--size-tiny"]').contains('개인정보처리방침') 
		// '개인정보처리방침' 확인
		cy.get('[class="eb-text eb-text--role-default eb-text--size-tiny"]').contains('업데이트 소식') 
		// '업데이트 소식' 확인
		cy.get('[class="eb-text eb-text--role-default eb-text--size-tiny"]').contains('고객 문의') 
		// '고객 문의' 확인
		cy.get('[class="eb-text eb-text--role-default eb-text--size-tiny"]').contains('서비스 상태') 
		// '서비스 상태' 확인
		cy.get('[aria-label="Change Languages"]')
		// 언어 번역 확인
		
    })
})
