# Shopping Platform

![12st](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/5fb5b2d6-b0a9-4dbd-aded-9e75a31c248f)

## 목차

1. [프로젝트 소개](#프로젝트-소개)
2. [설치 및 실행](#설치-및-실행)
3. [사용 방법](#사용-방법)
4. [기술 스택](#기술-스택)
5. [기여 방법](#기여-방법)
6. [라이센스](#라이센스)

## 프로젝트 소개
- 기존 팀프로젝트를 리팩토링한 프로젝트입니다.
- 다양한 브랜드의 상품을 구매할 수 있는 이커머스 웹 프로젝트입니다.

## 설치 및 실행

### 설치
```bash
# 프로젝트 클론
> git clone https://github.com/nicehyun/12st-shoppingPlatformRe.git

# 의존성 패키지 설치
> npm i
```

### 환경 변수 설정
```bash
# 회원가입 본인인증 시 Firebase Authentication을 사용
NEXT_PUBLIC_FIREBASE_API_KEY="Your_Authentication_API_Key"
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN="Your_Firebase_App_Domain"
NEXT_PUBLIC_FIREBASE_PROJECT_ID="Your_Firebase_Project_ID"
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET="Your_Firebase_Storage_Bucket"
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID="Your_Firebase_Messaging_Sender_ID"
NEXT_PUBLIC_FIREBASE_APP_ID="Your_Firebase_App_ID"
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID="Your_Firebase_Measurement_ID"

# Middleware에서 Next-Auth Session-Token 인증에 사용하는 Secret Key
NEXTAUTH_SECRET="Your_Next_Auth_Secret_Key"

# JWT Token 생성과 인증에 사용하는 Key
SECRET_KEY="Your_Token_Secret_Key"

# 현재 NEXT_PUBLIC_BASE_URL은 localhost:3000, NEXT_PUBLIC_DB_URL은 localhost:8080 사용 중입니다.
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_DB_URL="http://localhost:8080"
```

### 실행
```bash
# 개발 환경에서 프로젝트 실행
> npm run dev
```
</br></br>

## 📚기술스택
<div align=center> 
  <img src="https://img.shields.io/badge/nextjs-#000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> 
  <img src="https://img.shields.io/badge/c++-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white">
  <img src="https://img.shields.io/badge/python-3776AB?style=for-the-badge&logo=python&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/oracle-F80000?style=for-the-badge&logo=oracle&logoColor=white"> 
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white"> 
  <img src="https://img.shields.io/badge/mariaDB-003545?style=for-the-badge&logo=mariaDB&logoColor=white"> 
  <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/vue.js-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white"> 
  <img src="https://img.shields.io/badge/angular.js-DD0031?style=for-the-badge&logo=angularjs&logoColor=white">
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"> 
  <img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
  <img src="https://img.shields.io/badge/django-092E20?style=for-the-badge&logo=django&logoColor=white">
  <img src="https://img.shields.io/badge/flask-000000?style=for-the-badge&logo=flask&logoColor=white">
  <img src="https://img.shields.io/badge/flutter-02569B?style=for-the-badge&logo=flutter&logoColor=white">
  
  <img src="https://img.shields.io/badge/bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white">
  <br>

  <img src="https://img.shields.io/badge/linux-FCC624?style=for-the-badge&logo=linux&logoColor=black"> 
  <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white"> 
  <img src="https://img.shields.io/badge/apache tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/fontawesome-339AF0?style=for-the-badge&logo=fontawesome&logoColor=white">
  <br>
</div>




