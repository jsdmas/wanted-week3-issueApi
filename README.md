### 과제 범위

1. 이슈 목록 화면

   - 이슈 목록 가져오기 API 활용
   - open 상태의 이슈 중 코멘트가 많은 순으로 정렬
   - 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
   - 다섯번째 셀마다 광고 이미지 출력
     - 이미지
       https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100
       https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100
     - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
   - 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

1. 이슈 상세 화면
   - 이슈의 상세 내용 표시
   - ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
1. 공통 헤더
   - 두 페이지는 공통 헤더를 공유합니다.
   - 헤더에는 Organization Name / Repository Name이 표시됩니다.

### 요구 사항

- 필수 요구 사항

  - 이슈 목록 및 상세 화면 기능 구현
  - Context API를 활용한 API 연동
  - 데이터 요청 중 로딩 표시
  - 에러 화면 구현
  - 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시

### 개발 조건 및 환경

- 기간: 07/11 화요일 세션 종료 후(17:00) ~ 07/14 금요일 자정(24:00)
- 필수 기술: React, Context API
- 선택 기술:
  - 마크다운 렌더링 라이브러리

### 16Team 사용 라이브러리

- 언어 : ts
- 필수 기술 : react, contextAPI
- 전역 상태 : redux, react-redux
- 라우팅 : react-router-dom
- HTTP Client : Axios
- 스타일 : emotion

# 할일

1. loading redux 상태 추가
2. owner, repo redux 상태 추가
3. detail page 추가
4. 광고추가
5. axios 인터셉터 설정 추가
