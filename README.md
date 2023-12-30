![12st](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/5fb5b2d6-b0a9-4dbd-aded-9e75a31c248f)

## 목차

1. [프로젝트 소개](#introduce)
2. [설치 및 실행](#install)
3. [기술 스택](#stack)
4. [디렉토리 구조](#directory)
5. [주요 기능](#feature)
6. [Troubleshooting](#troubleshooting)


## <span id="introduce">프로젝트 소개</span>
- 기존 팀프로젝트를 리팩토링한 풀 스택 프로젝트입니다.
- 다양한 브랜드의 상품을 구매할 수 있는 이커머스 웹 프로젝트입니다.

## <span id="install">🗣️ 설치 및 실행</span>

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
# 3000, 8080 Port를 사용하고 있으신 경우 수정해주세요.
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
NEXT_PUBLIC_DB_URL="http://localhost:8080"
```

### 실행
```bash
# 개발 환경에서 프로젝트 실행
> npm run dev
```
</br></br>

## <span id="stack">⚙️ 기술스택</span>
### 프레임워크
<img src="https://img.shields.io/badge/next.js 13.4.12-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"> 

### 언어 
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</br>

### UI 라이브러리
<div> 
  <img src="https://img.shields.io/badge/react 18.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/mui 5.14.1-007FFF?style=for-the-badge&logo=mui&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss 3.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/swiper 10.3.1-6332F6?style=for-the-badge&logo=swiper&logoColor=white">
 <img src="https://img.shields.io/badge/react icons 4.10.1-06B6D4?style=for-the-badge">
</div>
</br>

### 상태 관리 라이브러리
<div>
  <img src="https://img.shields.io/badge/tanstackquery 4.32.0-0088CC?style=for-the-badge&logo=reactquery&logoColor=white"> 
  <img src="https://img.shields.io/badge/redux 8.1.1-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/redux toolkit 1.9.5-764ABC?style=for-the-badge&logo=redux&logoColor=white">
</div>
</br>



### Back End 라이브러리
<div>
  <img src="https://img.shields.io/badge/firebase 10.1.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
  <img src="https://img.shields.io/badge/firebase admin 11.10.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
  <img src="https://img.shields.io/badge/json server 0.17.4-FF0000?style=for-the-badge">
</div>
</br>

### 기타 라이브러리
<div>
 <img src="https://img.shields.io/badge/eslint 8.45.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/prettier 2.8.7-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
<img src="https://img.shields.io/badge/lodash 4.17.21-06B6D4?style=for-the-badge&logo=lodash&logoColor=white">
<img src="https://img.shields.io/badge/axios 1.4.0-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
<img src="https://img.shields.io/badge/jsonwebtokens 9.0.1-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"> 
  <img src="https://img.shields.io/badge/bcrypt 5.1.1-EF2D5E?style=for-the-badge">
   <img src="https://img.shields.io/badge/daum postcode 3.1.3-83B81A?style=for-the-badge"> 
</div>
</br></br>
  
## <span id="directory">📂 디렉토리 구조</span>
```plaintext
├── 📂 app ✅ App Directory
│   		├── 📂 api ✅ Route Handler
│   		│   		├── 📂 (common)
│   		│   		│   		├── 📂 categories
│   		│   		│   		├── 📂 coupons
│   		│   		│   		├── 📂 deliveryInfo
│   		│   		│   		├── 📂 heart
│   		│   		│   		├── 📂 mile
│   		│   		│   		├── 📂 product
│   		│   		│   		│   	└── 📂 [productId]
│   		│   		│   		└── 📂 userInfo
│   		│   		├── 📂 (productList)
│   		│   		│   		├── 📂 bestProductList
│   		│   		│   		│   	└── 📂 [...categories]
│   		│   		│   		├── 📂 categoryManagement
│   		│   		│   		│   	└── 📂 [[...categories]]
│   		│   		│   		└── 📂 searchProductList
│   		│   		│       	└── 📂 [...searchPrams]
│   		│   		├── 📂 auth
│   		│   		│   		├── 📂 [...nextauth]
│   		│   		│   		├── 📂 signIn
│   		│   		│   		└── 📂 signUp
│   		│   		│       		├── 📂 emailDuplicateCheck
│   		│   		│       		└── 📂 verificatePhone
│   		│   		│           		└── 📂 requestPhoneVerification
│   		│   		├── 📂 cart
│   		│   		├── 📂 checkout
│   		│   		├── 📂 home
│   		│   		└── 📂 myPage
│   		│       		└── 📂 customerCounseling
│   		├── 📂 (auth) ✅ Page
│   		│   	├── 📂 signIn
│   		│   	└── 📂 signUp
│   		├── 📂 (home)
│   		├── 📂 (productList)
│   		│   	├── 📂 arrivalProductList
│   		│   	├── 📂 bestProductList
│   		│   	│   └── 📂 [[...categories]]
│   		│   	├── 📂 searchProductList
│   		│   	│   └── 📂 [...searchPrams]
│   		│   	└── 📂 topSaleProductList     		
│   		├── 📂 cart
│   		├── 📂 categoryManagement
│   		│   ├── [[...categories]]
│   		├── 📂 checkout
│   		├── 📂 checkoutConfirmed
│   		├── 📂 myPage
│   		│   ├── 📂 checkoutCancelList
│   		│   ├── 📂 checkoutList
│   		│   ├── 📂 coupons
│   		│   ├── 📂 heartProductList
│   		│   ├── 📂 inquiryCustomerCounseling
│   		│   │   └── 📂 write
│   		│   ├── 📂 mile
│   		│   ├── 📂 productQnAList
│   		│   ├── 📂 reviewList
│   		│   └── 📂 userInfoOfModification
│   		└── 📂 productDetail
│       		└── 📂 [productId]
│
│
│
├── 📂 features ✅ Feature 별 Model, View, Hook, Util, Type 관리
│   		├── 📂 arrivalProductList
│   		├── 📂 auth
│   		│   ├── 📂 signIn
│   		│   └── 📂 signUp
│   		├── 📂 bestProductList
│   		├── 📂 cart
│   		├── 📂 categoryManagement
│   		├── 📂 checkout
│   		├── 📂 checkoutConfirmed
│   		├── 📂 common
│   		├── 📂 home
│   		├── 📂 layout
│   		├── 📂 myPage
│   		├── 📂 productDetail
│   		├── 📂 searchResultList
│   		└── 📂 topSaleProductList
│
├── 📂 firebase ✅ Firebase Config 
├── 📃 middleware.ts ✅ Next Middleware 설정
├── 📂 tanstackQuery ✅ Tnstack 설정
├── 📂 redux ✅ Redux 설정, Feature 별 Slice
└── 📂 types ✅ next-auth.d.ts
```
</br></br>

## <span id="feature">📍 주요 기능</span>
### 🏠 Home Page</br>
![home_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/debfd3a2-78e8-4b56-afcc-522c01a7b7c0)
</br>
- Home Page에서는 판매량이 가장 높은 상품, 새로운 상품, 할인율이 가장 높은 상품을 각 섹션별로 확인할 수 있습니다.</br>
- 각 섹션의 더보기 버튼을 클릭하면 관련 페이지로 이동합니다.
</br></br>

### 👍🏻 Best ProductList Page </br>
![bestProduct_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/149ac868-5231-468d-8e7a-e84ae6276d74)
</br>
- Best ProductList Page에서는 각 카테고리 별 판매량이 가장 높은 상품을 최대 100개까지 확인할 수 있습니다.
</br></br>

### 🎉 Arrival ProductList Page </br>
![arrival_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/bc0f78b6-1247-4cce-95ad-4687fc765808)
</br>
- Arrival ProductList Page에서는 새로운 상품을 확인할 수 있습니다. (상품을 랜덤으로 추렸습니다.)
</br></br>

### 🏷️ Top Sale ProductList Page </br>
![topsale_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/b34013e4-1769-487f-9a27-788adf464aac)
</br>
- Top Sale ProductList Page에서는 할인율이 가장 높은 상품 100개를 확인할 수 있습니다.
</br></br>

### 🔎 Product Detail Page </br>
![product_detail_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/55ee41aa-9020-4255-b96a-6a94e029e5bb)
</br>
- Product Detail Page에서는 상품의 상세 정보를 확인할 수 있습니다.
- 로그인을 하지 않고 좋아요, 장바구니 담기, 바로 구매하기 버튼을 클릭 시 피드백 모달이 Mount 됩니다.
</br>

![productDetail_with_auth_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/16a04111-5808-4828-bf52-0f0a9204768b)
</br>
- 로그인 시 장바구니에 상품 추가가 가능합니다.
- 로그인 시 상품 '좋아요'가 가능합니다.
- 로그인 시 바로 구매하기가 가능합니다.
</br></br>

### 🔐 Sign Up Page </br>
![sign_up_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/33ee53f9-08ba-409f-a5cc-9b65466b4db5)
</br>
- Sign Up Page에서는 각각의 Step에서 유효성 검사를 통과해야 다음 Step으로 넘어갈 수 있습니다.
- Email Step - 사용하고자 하는 Email의 유효성을 검사하고, 중복 검사를 진행합니다.
- Password Step - 사용하고자 하는 Password의 유효성을 검사하고, 재확인 합니다.
- Name Step - 사용자 이름의 유효성을 검사합니다.
- Phone Verificate Step - Firebase Authentication을 이용해 입력한 번호로 인증 문자를 보내고, 받은 인증 번호를 입력합니다.

```bash
# 회원가입 시 DB에 저장된 Data
   {
      "email": "test123@test.com",
      "password": "$2b$10$OwvOLasDDdK88F5TNtXhIO3e8/FmceSD2o.XOBU2AhprfgjtirGHS",
      "name": "이름",
      "phone": "01012341234",
      "marketingClause": true,
      "mile": 0,
      "id": 2
    }
```
- 회원가입 시 DB에 저장되는 Data 중 Password는 암호화 되어 저장됩니다.
</br></br>

### 🔐 Sign In Page </br>
![sign_In_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/ee4b312e-0819-4e7e-bb03-1976f17b30e7)
</br>
- Sign In Page에서는 회원가입한 Email과 Password를 이용하여 로그인이 가능합니다.
</br></br>

### 👀 Search ProductList Page </br>
![search_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/7b3f5ff9-0483-427c-85d3-9466b6d82f8d)
</br>
- Search ProductList Page에서는 검색어와 일치하는 상품을 확인할 수 있습니다.
- 검색어와 일치하는 상품과 브랜드를 구분해서 확인이 가능합니다.
</br></br>

### 🛒 Cart Page </br>
![cart_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/5d6808c5-4810-4e13-8831-b4bb99137405)
</br>
- 장바구니에 상품을 추가하는 방법은 상품 카드에서 담기 버튼 클릭과 상품 상세 페이지에서 장바구니 담기 버튼 클릭을 하는 두 가지 방법이 있습니다.
- 상품 카드에서 담기 버튼 클릭 시 제거 버튼이 Mount 됩니다.
- Cart Page에서는 상품의 수량 조정, 선택 삭제, 개별 삭제가 가능합니다.
- 장바구니에 담긴 상품과 각 상품에 수량에 대한 총 주문금액, 총 배송비, 총 결제금액을 확인할 수 있습니다.
</br></br>

### 📚 Category Management Page </br>
![category_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/9d04c593-2bdd-4e45-a2ea-9412f54d3054)
</br>
- Layout Navigation의 카테고리 버튼 클릭으로 Category Management Page로 이동이 가능합니다.
- 카테고리를 선택하지 않은 경우 '전체' 상품들을 확인할 수 있습니다.
- 중분류 선택 시 해당 중분류에 해당하는 상품들을, 소분류 선택 시 해당 소분류에 해당하는 상품들을 세부적으로 확인할 수 있습니다.
- 선택한 카테고리는 Section의 Title에서 확인이 가능합니다.
</br></br>

### 📚 Checkout Page </br>
 ![checkout_Invalid_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/fe14dff7-d03a-4197-8764-d908107768fa)
</br>
- Checkout Page에서는 수령인, 배송지, 연락처1, 결제방법, 결제 약관에 대한 유효성 검사를 진행하며, 미진행 시 Feedback Modal을 통헤 사용자에게 Feedback을 전달합니다.
</br>

 ![checkout_productIndo_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/81a3d1d6-ed77-43de-92dd-7a65c0a10b15)
</br></br>
- 주문상품 정보에서 주문하고자 하는 하나의 상품 정보를 확인할 수 있으며, '펼치기' 버튼 클릭 시 주문하는 모든 상품의 정보를 확인할 수 있습니다.
- Coupon 적용 시 주문상품 정보에서 할인액이 각 상품이 얼마나 할인 받는지 확인이 가능합니다.
</br></br>

 ![checkout_info_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/cab047bf-ce56-43d9-8a18-e8b573db5bb6)
</br>
- '?'버튼 클릭 시 각 센션에 대한 섦명을 Modal을 통해 확인이 가능합니다.
</br></br>

 ![checkout_deliveryInfo_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/09121938-0f69-4f74-bf36-9559ff379f54)
</br>
- '기존배송지로 등록하기' 체크 후 결제하기 버튼 클릭 시 이후 주문에서 입력했던 배송지 정보를 불러와 사용합니다.
</br></br>

