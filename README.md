# ✈ 여행의 민족 ✈

## 개발기간

2022.06.10 - 2022.06.16


## 내용
🎉코로나로 끝나가는 이 시기에 다시금 여행에 대한 설렘이 살아날 수 있도록 자신이 갔던 여행지의 정보와 후기등을 공유하는 사이트
🎉누군가에게는 여행지에 대한 정보가 될 수 있고, 누군가에게는 자신이 갔던 여행지의 즐거움을 한번 더 기억하게 되는 그런 사이트를 만들고 싶어서 제작하게 되었습니다.

## 😎 여행의 민족을 제작한 자랑스러운 개발자들

👉 BE : 강명지, 박선우, 김성현

👉 FE : 임운철, 정대규, 장세화


<div><h1>🛠STACKS🛠</h1></div>   
<div align=center> 
   <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">   
  <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=purple">   
  <br>
  <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=pink">   
  <img src="https://img.shields.io/badge/amazons3-569A31?style=for-the-badge&logo=amazons3&logoColor=green">     
</div>



## API 명세서


![1](https://user-images.githubusercontent.com/105141025/174037627-70c9f058-e93a-4a35-a529-6562a298c429.png)
![2](https://user-images.githubusercontent.com/105141025/174037641-b7fc02b4-1ba1-4e53-9e69-0eb885c63683.png)



## 기능

- [x] 1. 게시글
  - [x] 목록 가져오기
  - [x] 추가하기 (+이미지 업로드하기)
  - [x] 삭제하기
  - [x] 수정하기
- [x] 2. 회원가입하기
- [x] 3. 로그인하기
- [x] 4. 파이어베이스 or S3로 배포!



## 페이지별 상세페이지별 상세

1. 회원가입 페이지

   - [x] 이메일 형식 체크
   - [x] 비밀번호 체크

2. 로그인 페이지

   - [x] 이메일, 패스워드 형식에서 벗어날 시 로그인 막을 것

3. 메인 페이지(게시글 목록 페이지)

   - [x] 게시글 목록 노출
   - [x] 게시글 하나는 작성자, 닉네임, 이미지 미리보기, 텍스트 내용으로 구성
   - [x] 게시글 하나를 클릭 시, 게시글 상세 페이지로 이동

4. 글 작성 페이지
   - [x] 1. 올릴 사진 미리보기
   - [x] 2. 사진을 올려야 작성완료 가능     
   - [x] 3. 작성 완료 시 메인 페이지로 이동

5. 게시글 상세 페이지

   - [x] 작성자만 수정 삭제 가능



## 초기설정

```bash
$ yarn add react@18.1.0

$ yarn add react-router-dom

$ yarn add styled-components

$ yarn add redux react-redux redux-thunk redux-logger redux-actions redux-devtools-extension
 
$ yarn add enhancer

$ yarn add connected-react-router

$ yarn add axios

$ yarn add firebase@9.8.3

$ yarn add storage
```

## 결과

[여행의민족](http://goldenduck3.s3-website.ap-northeast-2.amazonaws.com)
