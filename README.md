# elice : QA Engineer - E2E 테스트
- E2E 테스트 도입
- 테스트 케이스 작성
- 테스트 도구 : Cypress, github
- 기간 : 2023.11.17.(금) 20시 ~ 2023.11.21.(화) 20시
----------------------------------------------------------------------
# 1. 문제
## 1-1. Example Test Cases (Expected)
- 모든 파일 경로는 https://github.com/likecrong/elice 폴더 기준으로 작성한다.
1) 앱 로드가 정상적으로 되어야한다.
- cypress/e2e/01appLoad.cy.js
- 상단 부 로고, 중반부, 하단부(회원가입), footer가 화면에 전시되는 지 확인한다.
2) 한영변환이 잘되어야한다. (footer 에 한영변환 UI 가 존재함)
- cypress/e2e/02translator.cy.js
- footer에서 영어로 전환했다가 한국어로 다시 전환하는 테스트 케이스를 작성해 확인한다.
3) 로그인하지 않았을때 로그인 페이지로 이동되어야한다.
- cypress/e2e/03loginFail.cy.js
- 아이디와 비밀번호 입력 및 로그인 테스트 케이스를 작성해 확인한다.
4) 로그인하였을때는 account 설정페이지로 이동되어야한다.
- cypress/e2e/04loginSuccess.cy.js
- 올바른 아이디와 비밀번호를 입력해 설정페이지로 이동하는지 확인한다.
## 1-2. Additional Missions
- 모든 파일 경로는 https://github.com/likecrong/elice 폴더 기준으로 작성한다.
1) CI(Continuous Integration) 도입
- GITHUB ACTIONS를 활용하여 깃허브 내 코드가 변경되어 commit하면, 자동으로 ACTIONS가 실행돼 테스트가 진행된다.
2) 주기적인 테스트
- TEST URL 내 변경이 있는 지는 지속적인 코드 리뷰나 직관적인 UI 변경 사항이 있는지 검토해 확인한다.
3) 테스트 결과 및 버그 관리
- 테스트 결과는 GITHUB ACTIONS 내 E2E on Chrome에서 확인한다.
- 각 테스트 케이스의 라벨 출력을 통해 정상적으로 통과되었는지 알 수 있다.
