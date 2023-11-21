describe('Test of login page', () => {
	beforeEach(() => {
      cy.visit('https://accounts.elice.io') 
    });
	
	//1. 앱 로드 확인
	it('load check', () => {
		cy.get('input[name="loginId"]') // 이메일 필드 확인
		cy.get('input[name="password"]') // 비밀번호 필드 확인
		cy.get('button[aria-label="비밀번호 보기"]') // 비밀번호 보기 버튼 확인
		cy.get('[class="MuiTypography-root MuiTypography-body2 MuiLink-root MuiLink-underlineHover css-q6237f"]').contains('비밀번호를 잊어버리셨나요?') // '비밀번호를 잊어버리셨나요?' 필드 확인
		
		cy.get('button[id="mui-3"]').contains('로그인')	 // '로그인' 버튼 필드 확인
		
		cy.get('[class="css-fwbfcf ex72zvc0"]').contains('또는') // '또는' 필드 확인
		
		cy.get('button[aria-label="Kakao"]').contains('카카오로 로그인') // '카카오로 로그인' 버튼 확인
		cy.get('button[aria-label="Google"]').contains('구글로 로그인') // '구글로 로그인' 버튼 확인
		
		cy.get('button[class="css-1n4x2a0 e1u3bopy0"]').click() // '접기' 버튼 확인 [열기]
		cy.get('button[aria-label="Microsoft"]') //'Microsoft' 버튼 확인
		cy.get('button[aria-label="Facebook"]') //'Facebook' 버튼 확인
		cy.get('button[aria-label="Naver"]') //'Naver' 버튼 확인
		cy.get('button[aria-label="Github"]') //'Github' 버튼 확인
		cy.get('button[aria-label="Apple"]') //'Apple' 버튼 확인
		cy.get('button[aria-label="Whalespace"]') //'Whalespace' 버튼 확인
		cy.get('button[class="css-1n4x2a0 e1u3bopy0"]').click() // '접기' 버튼 확인 [닫기]
		
		// '회원가입' 필드 확인
		cy.get('[class="css-16k01br e1t19hrb0"]').contains('아직 계정이 없으신가요?')
		cy.get('[class="css-16k01br e1t19hrb0"]').contains('회원가입')
			
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
		
		cy.wait(3000)
    })
	
	
})
