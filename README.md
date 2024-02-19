# 🛒 E-Commerce Application - 12st

![readme-banner img 001](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/88f40055-9def-4b5e-b7ac-0d9e0b2b0d37)

- <a href="https://12st-shopping-platform-re-git-main-ish1610.vercel.app" target="_blank">배포 URL</a>

- <a href="https://github.com/nicehyun/12st-shoppingMall" target="_blank">리팩토링 전 프로젝트 소스 코드</a>

- Test Email & Password
```
Email : test@test.com
Password : test123123!
``` 

<br/><br/>

## 🪜 목차

1. [프로젝트 소개](#introduce)
2. [기술 스택](#stack)
3. [설치 및 실행](#install)
4. [디렉토리 구조](#directory)
5. [사용자 경험 개선](#ux)
6. [Page 별 View](#feature)


<br/><br/>

## <span id="introduce">프로젝트 소개</span>
- 12st는 다양한 Brand의 상품을 한 곳에 모아 놓은 E-Commerce Platform입니다.
- 신상품, 할인율이 높은 상품, 인기 상품에 대한 정보를 간편하게 확인할 수 있습니다.
- 인기 상품에 대한 정보를 원하는 카테고리를 선택해서 원하는 상품만 확인할 수 있습니다.
- 검색을 통해 검색어에 해당하는 상품과 브랜드를 확인할 수 있습니다.
- 복잡하지 않은 문의 Form을 통해 간편하게 문의가 가능합니다.

</br></br>

## <span id="stack">⚙️ 기술스택</span>

### 프레임워크
<img src="https://img.shields.io/badge/next.js 13.4.12-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
</br>

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
</div>
</br>

### 기타 라이브러리

<div>
 <img src="https://img.shields.io/badge/eslint 8.45.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/prettier 2.8.7-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
<img src="https://img.shields.io/badge/jsonwebtokens 9.0.1-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"> 
  <img src="https://img.shields.io/badge/bcrypt 5.1.1-EF2D5E?style=for-the-badge">
</div>
</br>

<details>
  <summary><h2>💁🏻‍♂️ 프레임워크 및 라이브러리 선택 이유</h2></summary>
  </br>
  </br>

 ![img](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/41a76c86-26dc-4a57-b620-bf6167b9d71a)

애플리케이션에 Next.js 프레임워크를 적용한 이유는 아래와 같습니다.

<h3>성능 최적화</h3>
리팩토링 전 애플리케이션의 경우 초기 로딩 속도가 매우 느렸고 이미지 크가가 커 이미지 로딩 속도가 길었습니다. 

이를 개선하기 위해 Next.js를 선택한 것은 효과적이었습니다.

- 로딩 속도 개선을 위한 SSR 적용
- 이미지 크기 최적화를 위한 Image 사용
- 자동화된 코드 스플리팅
- First Load JS 크기 개선을 위해 Next Dynamic Import 사용

Next.js는 기본적으로 애플리케이션을 다양한 측면에서 효과적인 최적화를 해주고 개발자가 추가로 필요하다고 생각하는 부분에 추가 최적화를 진행해주면 되었기 때문에 매우 편리했습니다. 
성능 최적화의 개선이 나아가 사용자 경험 개선까지 이어질 수 있었습니다.
</br>

<h3>유지 보수성 향상</h3>
리팩토링 전 애플리케이션의 경우 프로젝트 구조가 직관적이지 않았습니다. 이는 데이터의 지역성을 이해하지 못하고 구성한 프로젝트 구조도 한 몫 했을 것입니다.
하지만 client와 server를 별로도 분리해서 관리했기 때문도 있었습니다.

Next.js의 File-Based-Routing을 통해 프로젝트 구조의 직관성을 개선할 수 있었습니다.

Back-End 코드 또한 File-Based-Routing이 적용되기 때문에 유지보수가 용이했습니다.
 </br>
 </br>

 ---
 
![제목을-입력해주세요_-001 (1)](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/b3c40d5a-7f7f-4d28-8965-256b7f529c14)


프로젝트 초반, `TanStack Query` 라이브러리 사용을 고민했습니다.

Next 13에서 기존의 `fetch` api를 확장하여 서버가 각 요청에 대해 `caching`을 자동으로 해줍니다. 때문에  `TanStack Query`를 굳이 사용해야 될까라는 생각을 했습니다.

하지만 확장된 `fetch` api는 설정한 `revalidate`이 지나지 않으면 cache된 데이터를 사용합니다. 때문에 사용자 Action에 대한 data 최신화 설정이 불가능합니다.

Server State를 caching 하는 것 뿐 아니라 `TanStack Query`는 많은 이점을 가져올 수 있습니다.

- Server State 관리 : server state를 client state에서 분리
- 비지니스 로직 분리 : server 관련 비지니스 로직을 분리 (Mutataion에서 관리)
- 무한 스크롤 : useInfiniteQuery hook을 사용해 간단한 무한 스크롤 구현
- Hydration : data prefetch

특히 가장 큰 이점으로 다가온 부분은 server 관련 `비지니스 로직 분리`와 `Hydration` 입니다.

- 비지니스 로직을 분리

```
export const useCheckoutMutaion = () => {

  // ... 코드 생략

  const { isLoading: isCheckoutLoading, mutateAsync } = useMutation(
    ({
      checkoutInfo,
      isClauseCheck,
    }: {
      checkoutInfo: CheckoutList
      isClauseCheck: Omit<CheckoutClauseCheck, "all">
    }) =>
      checkoutAPI.checkout(
        session?.user.accessToken,
        checkoutInfo,
        isClauseCheck
      ),
    {
      onSuccess: (data) => {
        if (data.status === 401) {
          showFeedbackModalWithErrorMessage(data.error ?? "")
          return
        }

        if (data.status === 200) {
          queryClient.invalidateQueries(["productListInCart"])
          queryClient.invalidateQueries(["checkoutList"])
          queryClient.invalidateQueries(["deliveryInfo"])
          queryClient.invalidateQueries(["userMile"])

          routeTo(ROUTE.CHECKOUTCOMFIRMED)

          return
        }
      },
      onError: () => {
        showFeedbackModalWithContent(
          "상품 주문에 실패했습니다. 오류가 계속되면 고객센터에 문의해주세요."
        )
      },
    }
  )

  const checkoutMutateAsync: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault()

    // ... checkout api form data

    // ... checkout api 호출 전 validate 로직


    mutateAsync({
      checkoutInfo,
      isClauseCheck: {
        collectionOfUserInfo: !!collectionOfUserInfo,
        provisionOfUserInfo: !!provisionOfUserInfo,
        paymentAgency: !!paymentAgencyClause,
      },
    })
  }

  return {
    isCheckoutLoading,
    checkoutMutateAsync,
  }
}

```
리팩토링 전 프로젝트에서는 뷰 로직에서 비지니스를 관리를 했습니다. 

때문에 재사용성은 물론, 코드의 가독성이 현저히 떨어졌습니다. 이로 인해 유지보수 측면에서도 불편함이 많았습니다.

비지니스 로직과 뷰의 분리, 특히 form data를 사용한 비지니스 로직의 분리에 대해 고민했던 시기가 있었습니다. 그 고민에 대한 좋은 선택지 중 하나는 해당 로직을 `mutation`에서 관리하는 것이라 생각했습니다.

```
// view

 const handleSignUpSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault()

    // 비지니스 로직 분리
    await signUpMuatateAsync(event)

    // view 로직
    dispatch(resetSignUpState())
    setActiveStep(0)
    resetClauseCheck()
  }
```
이제 view에서는 `signUpMuatateAsync`에 `event` 객체만 전달하면 됩니다. 


- Hydration
  
```
const ArrivalProductListPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(["arrival", "initial"], () =>
    arrivalAPI.getArrivalProductList(1)
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ArrivalProductListSection />
    </Hydrate>
  )
}
```
물론 TanStack Query를 사용하지 않고도 prefetching이 가능하지만, `prefetchQuery`를 사용하여 미리 데이터를 prefetch 해주었습니다.

이 부분도 오랜 고민을 했지만, `invalidateQueries`와 query hook에서 `initialData`를 설정할 때 api 호출이 아닌 `getQueryData`로 간편하게 cache된 데이터를 가져올 수 있기 때문에 TanStack Query를 사용했습니다.
</br>
 </br>

 ---


![제목을-입력해주세요_-001 (1)](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/94d9e730-a2a1-4419-bd7b-ea65d22cd080)

대부분의 CSS-in-JS 라이브러리들이 쓰는 방식은 Runtime CSS-in-JS 또는 Runtime stylesheets입니다.

스타일을 정의하는 코드가 클라이언트 런타임 때 실행되는 JS 번들에 포함되는 방식인데 브라우저는 스타일 코드를 해석하지 못하므로 라이브러리의 코드도 JS 번들에 포함되어야 합니다.

이러한 방식으로 인해 발생하는 단점이 2가지 존재합니다.

- JS 번들 용량 증가: 스타일 코드와 라이브러리 런타임 코드가 클라이언트로 전달
- 페이지 렌더링 시간 증가: JS에 작성된 CSS 코드를 구문 분석하고 동적으로 추가하면서 Scripting 시간 증가

위의 두 가지 단점은 결국 사용자 경험과도 연결되는 점이기도 합니다.

하지만 이는 CSR 환경을 바탕으로 두고 구상한 방법이었기 때문에 SSR 환경에서 문제가 나타납니다. 

SSR에서 CSS-in-JS 라이브러리를 그대로 사용하면 hydrate 이전 서버에서 받아오는 HTML에 잠깐 css가 전혀 적용되지 않습니다. 때문에 초기 HTML에 포함되는 요소에 대한 CSS인 `Critical CSS`를 서버쪽에서 사용할 수 있도록 하는 처리가 필요합니다. 

이 때 `Critical CSS`에 대한 코드는 클라이언트 쪽에서 실행될 JS에도 포함되어야 하기 때문에 동일한 스타일에 대한 코드가 초기 HTML에서 한 번, JS 번들에서 두 번 클라이언트에게 전달되는 문제가 발생하게 됩니다.

특히 Next.js 13 버전에서는 SSR 처리를 한 페이지에 해당되는 HTML를 활용하는 방식으로 구현했기에 서버 컴포넌트와 방향이 충돌합니다. 

`Tailwind CSS`는 Utility CSS로 className을 컴포넌트가 아니라 기능에 붙임으로써 CSS의 문제를 해결합니다. utility CSS이므로 필요에 따라 확장성있게 CSS를 작성할 수 있고, 빌드 시에 사용하지 않는 클래스는 제거되어 번들 크기에 주는 영향도 줄일 수 있고, atomic한 특성으로 인해 프로젝트의 크기가 거대해져도 스타일시트의 크기가 비례해서 늘어나지 않는 이점이 있습니다.

SSR 관점에서 중요한 건 런타임에 스타일시트를 생성하지 않고 빌드 타임에 스타일시트를 가져오는 방식이라는 점입니다.

</br>
 </br>

 ---

![제목을-입력해주세요_-001 (2)](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/57e2baff-4fc0-43dd-be7e-88a9b37e4693)

상태 관리 라이브러리로 `Redux`를 사용하다 `React Query`(현 TanStack Query)를 접했을 때의 일입니다.

두 라이브러리 모두 전역 상태를 관리할 수 있었기에 둘 중 어떤 라이브러리를 사용해서 전역 상태를 관리해야되는지 많은 고민을 했었습니다.

물론 이 고민은 의미 없는 고민이었고, 답은 `single source of truth`라는 말에 있었습니다.

`SSOT`는 정보 시스템 설계 및 이론 중 하나로 정보와 스키마를 오직 하나의 출처에서만 생성, 편집하도록 하는 방법론입니다. 물론 오직 하나의 출처는 데이터의 상태가 최신의 상태를 유지해야 합니다.

이는 Redux의 철학 중 하나이기도 합니다. `SSOT`에 부합하기 위해서는 Server에서 가져온 데이터를 관리하는 것은 부적절합니다. 때문에 Server에서 가져온 Data를 포함한 State는 TanStack Query를 사용해서 관리했습니다.
 
여기서 발생한 의문점은 '이제 Redux를 사용하지 않아도 되는 걸까? 필요없는 것일까?' 였습니다. 답은 여전히 `single source of truth`라는 말에 있었습니다.

Client에서 발생한 Data를 포함한 State가 `SSOT`에 부합하기 위해서는 Client 전역 상태 관리도 여전히 필요합니다.

Client 전역 상태 관리를 React에서 제공하는 Context API를 사용할 수도 있겠지만, reducer의 상태의 불변성을 지키기 위해 작성할 장황한 코드와 `Wrapper` 컴포넌트 들을 생각한다면 Context를 사용하고 싶지는 않았습니다.

익숙하기도 했고 redux-tookit을 사용한다면 내부의 immer 라이브러리를 덕분에 불변성을 지키기 위한 코드 작성을 해주지 않아도 되었기 때문에 Client 전역 상태 관리 라이브러리는 Redux를 선택했습니다.

</details>

</br></br>

## <span id="install">👨🏻‍🔧 설치 및 실행</span>

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

# JWT Token 생성과 인증에 사용하는 Key (Access Token, Refresh Token)
TOKEN_SECRET_KEY="Your_Token_Secret_Key"
REFRESH_TOKEN_SECRET_KEY="Your_Token_Secret_Key""

# Application 실행 Port 번호
NEXT_PUBLIC_BASE_URL="http://localhost:3000"
# Json Server 실행 Port 번호
NEXT_PUBLIC_DB_URL="http://localhost:8080"
```

### Middleware 수정
```bash
# middleware.ts 수정하기

# Product에서 Next-Auth Session에 저장된 Token의 cookieName은 __Secure-next-auth.session-token입니다.
 const token = await getToken({
    req: request,
    secret: secret,
    cookieName: "__Secure-next-auth.session-token",
  })

# Development에서 사용 시 cookieName을 next-auth.session-token으로 수정해주세요.
  const token = await getToken({
    req: request,
    secret: secret,
    cookieName: "next-auth.session-token",
  })
```

### 실행

```bash
# 개발 환경에서 프로젝트 실행
> npm run dev

# json-server의 Port는 NEXT_PUBLIC_DB_URL와 일치
> npx json-server --port 8080 --watch db.json
```

</br></br>



## <span id="directory">📂 디렉토리 구조</span>

<details>
<summary>디렉토리 구조 보기</summary>

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

</details>
</br></br>

## <span id="ux">🧑🏻‍💻 사용자 경험 개선</span>

<details>
<summary>사용자 경험 개선 평쳐보기</summary>

### SSR Hydration

![SSR](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/e53835a6-3d9d-41bd-8bf7-763fc2608989)

- home
- bestProductList
- arrivalProductList 
- topSaleProductList 
- categoryManagement

```
// prefetchQuery

const ArrivalProductListPage = async () => {
  const queryClient = getQueryClient()

  await queryClient.prefetchQuery(["arrival", "initial"], () =>
    arrivalAPI.getArrivalProductList(1)
  )

  const dehydratedState = dehydrate(queryClient)

  return (
    <Hydrate state={dehydratedState}>
      <ArrivalProductListSection />
    </Hydrate>
  )
}
```

위의 상품 리스트를 렌더링하는 페이지들에 TanStack Query의 `prefetchQuery`를 사용하여 상품의 데이터를 Pre-Fetching합니다.

Loading UI가 아닌 상품들을 바로 확인할 수 있도록 하여 사용자 경험을 개선할 수 있도록 해주었습니다.

</br></br>

### 명확한 Feedback

![feedback](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/58521ca2-0c6a-4a53-a038-e4ca92a9bf72)

사용자와 상호작용하는 `mutation`과 연결된 모든 액션들이 사용자에게 `mutation`에 대한 명확한 Feedback을 전달합니다. 

프로젝트의 Feedback 유현은 아래와 같습니다.
- `mutation`에 필요한 사용자 입력값에 대한 유효성이 미충족일 경우 상세 Feedback 전달
- 특정 단계를 건너뛰고 URL을 통해 특정 기능에 접근 시 Feedback 전달 후 Route 모달 마운트
- `mutation` 결과에 대한 Feedback 전달 ( Success - 200, Fail - 401, 404, 500  )
- `mutation`이 진행 중일 경우 Loading UI, Cursor-Not-Allowed, BackGround Color 변경 등을 이용

![feedback2](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/3fdc463e-e29c-4c45-85f9-e79d4cbfda98)

회원가입 페이지에서는 실시간 유효성 검사 및 피드백에 대한 결과를 확인할 수 있도록 하여 Placeholder 내용을 확인하지 않더라도 간편하게 입력값이 옳바른지 확인할 수 있도록 했습니다.

</br></br>

### Layout Shift 제거

![layoutshift](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/3fc3e32a-69c4-4f8a-927f-98617b52a896)

TanStack Query의 `prefetchQuery`를 사용하지 않는 경우 Skeleton UI를 통해 Layout Shift를 제거했습니다.

</br></br>

### Media Query

![mediaquery](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/b68fbaab-444b-4104-813c-cb19d6ecc28c)


- 479px 이하
- 480px ~ 767px
- 768px ~ 1023px
- 1024px 이상

4가지의 Media Query 적용을 통해 다양한 디바이스에서 웹 애플리케이션을 보다 편리하게 이용할 수 있도록 해주었습니다.

</details>





</br></br>

## <span id="feature">🖥️ Page 별 View</span>

<details>
<summary>Page 별 View 살펴보기</summary>

<details>
  
  <summary><h3> 🏠 Home Page </h3></br></summary>

![home_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/debfd3a2-78e8-4b56-afcc-522c01a7b7c0)
</br>

- Home Page에서는 판매량이 가장 높은 상품, 새로운 상품, 할인율이 가장 높은 상품을 각 섹션별로 확인할 수 있습니다.</br>
- 각 섹션의 더보기 버튼을 클릭하면 관련 페이지로 이동합니다.
  </br></br>

</details>

<details>
  
  <summary><h3> 👍🏻 Best ProductList Page </h3></br></summary>

![bestProduct_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/149ac868-5231-468d-8e7a-e84ae6276d74)
</br>

- Best ProductList Page에서는 각 카테고리 별 판매량이 가장 높은 상품을 최대 100개까지 확인할 수 있습니다.
  </br></br>

</details>

<details>
  
  <summary><h3> 🎉 Arrival ProductList Page </h3></br></summary>

![arrival_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/bc0f78b6-1247-4cce-95ad-4687fc765808)
</br>

- Arrival ProductList Page에서는 새로운 상품을 확인할 수 있습니다. (상품을 랜덤으로 추렸습니다.)
</br></br>
</details>

<details>
  
  <summary><h3> 🏷️ Top Sale ProductList Page </h3></br></summary>

![topsale_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/b34013e4-1769-487f-9a27-788adf464aac)
</br>

- Top Sale ProductList Page에서는 할인율이 가장 높은 상품 100개를 확인할 수 있습니다.
</br></br>
</details>

<details>
  
  <summary><h3> 🔎 Product Detail Page </h3></br></summary>

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
</details>

<details>
  
  <summary><h3> 🔐 Sign Up Page </h3></br></summary>

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
</details>

<details>
  
  <summary><h3> 🔐 Sign In Page </h3></br></summary>

![sign_In_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/ee4b312e-0819-4e7e-bb03-1976f17b30e7)
</br>

- Sign In Page에서는 회원가입한 Email과 Password를 이용하여 로그인이 가능합니다.
- - Layout Navigation, Header는 해당 페이지에서 사용되지 않습니다.
  </br></br>
  </details>

<details>
  
  <summary><h3> 👀 Search ProductList Page </h3></br></summary>

![search_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/7b3f5ff9-0483-427c-85d3-9466b6d82f8d)
</br>

- Search ProductList Page에서는 검색어와 일치하는 상품을 확인할 수 있습니다.
- 검색어와 일치하는 상품과 브랜드를 구분해서 확인이 가능합니다.
</br></br>
</details>

<details>
  
  <summary><h3> 🛒 Cart Page </h3></br></summary>

![cart_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/5d6808c5-4810-4e13-8831-b4bb99137405)
</br>

- 장바구니에 상품을 추가하는 방법은 상품 카드에서 담기 버튼 클릭과 상품 상세 페이지에서 장바구니 담기 버튼 클릭을 하는 두 가지 방법이 있습니다.
- 상품 카드에서 담기 버튼 클릭 시 제거 버튼이 Mount 됩니다.
- Cart Page에서는 상품의 수량 조정, 선택 삭제, 개별 삭제가 가능합니다.
- 장바구니에 담긴 상품과 각 상품에 수량에 대한 총 주문금액, 총 배송비, 총 결제금액을 확인할 수 있습니다.
</br></br>
</details>

<details>
  
  <summary><h3>📚 Category Management Page </h3></br></summary>

![category_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/9d04c593-2bdd-4e45-a2ea-9412f54d3054)
</br>

- Layout Navigation의 카테고리 버튼 클릭으로 Category Management Page로 이동이 가능합니다.
- 카테고리를 선택하지 않은 경우 '전체' 상품들을 확인할 수 있습니다.
- 중분류 선택 시 해당 중분류에 해당하는 상품들을, 소분류 선택 시 해당 소분류에 해당하는 상품들을 세부적으로 확인할 수 있습니다.
- 선택한 카테고리는 Section의 Title에서 확인이 가능합니다.
</br></br>
</details>

<details>
  
  <summary><h3> 💰 Checkout Page </h3></br></summary>

![checkout_Invalid_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/fe14dff7-d03a-4197-8764-d908107768fa)
</br>

- Checkout Page에서는 수령인, 배송지, 연락처1, 결제방법, 결제 약관에 대한 유효성 검사를 진행하며, 미진행 시 Feedback Modal을 통헤 사용자에게 Feedback을 전달합니다.
- Layout Navigation은 해당 페이지에서 사용되지 않습니다.
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

![checkout_mile_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/a6325ea4-91ea-4201-a780-7e9e090fed88)
</br>

- 보유한 마일리지보다 많은 숫자를 입력할 경우 0으로 Reset이 되며, '모두 사용' 버튼 클릭 시 보유한 마일리지를 모두 사용합니다.
- 결제 금액에 대한 적립 마일리지는 1%이며, 사용한 마일리지를 제외한 결제금액의 1%가 적립됩니다.
  </br></br>

🚨 상품 구매 시 해당 상품의 Sell Count가 증가합니다. Resource 절약을 위해 일정 시간 후 반영된 SellCount를 확인할 수 있습니다.
</br></br>

</details>

<details>
  
  <summary><h3> 🧾 Checkout Confirmed Page </h3></br></summary>

![confirmed_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/98cb493c-45d2-4cd7-b593-1cfdf24ec198)
</br>

- Checkout Confirmed Page에서는 완료된 주문에 대한 정보를 확인할 수 있습니다.
</br>
</details>

<details>
  
  <summary><h3> 💁🏻‍♂️ My Page </h3></br></summary>

![mypage_main_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/015aa04c-76da-495d-84db-4965c9172ffe)
</br>

- My Page는 Layout Navigation의 '유저' 버튼 클릭을 통해 이용이 가능합니다.
- My Page 좌측의 Category 미선택 시 5개의 주문내역, 6개의 '좋아요'를 누른 상품을 Pagination을 통해 간단하게 확인이 가능합니다.
  </br></br>

![mypage_coupon_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/e74436f5-40c0-409e-8abd-a71784da9e84)
</br>

- '쿠폰 >' 버튼 클릭 시 사용 가능한 쿠폰 정보를 확인할 수 있습니다.
  </br></br>

![mypage_heart_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/a29e61b0-3db7-469d-a179-57baf60eaeb3)
</br>

- '🩷' 버튼 클릭 시 페이지 당 12개의 '좋아요'를 누른 상품을 Pagination을 통해 확인할 수 있습니다.
  </br></br>

![mypage_checkoutList_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/4e8b1eb4-22e6-4047-a850-a431ac9b9e38)
</br>

- 좌측 '주문내역' 클릭 시 페이지당 10개의 주문내역을 Pagination을 통해 확인할 수 있습니다.
  </br></br>

![mypage_cancel_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/2ea84686-5051-45a9-878c-9dcecdc580ed)
</br>

- 좌측 '취소/교환/반품 내역' 클릭 시 모든 내역, 취소 내역, 반품 내역, 교환 내역을 확인할 수 있습니다.
- Pannel UI를 통해 간편한 내역 선택이 가능합니다.
  </br></br>

![mypage_userInfo_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/8f56e403-5471-49a6-b046-02cb4981db9a)
</br>

- 좌측 '회원정보수정' 클릭 시 사용자의 정보 확인이 가능합니다.
- 기본배송지 수정 시 변경 사항이 없는데 '저장하기' 버튼 클릭 시 Modal을 사용한 Feedback을 사용자에게 전달합니다.
- 약관동의 변경이 있는 경우만 '저장하기' 버튼 클릭이 가능합니다.
- Pannel UI를 통해 간편한 선택이 가능합니다.
  </br></br>

![mypage_mile_coupon_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/600f2605-ac6b-483f-a422-558e4c93a53f)
</br>

- 좌측 '쿠폰' 클릭 시 사용 가능한 쿠폰 정보를 확인할 수 있습니다.
- 좌측 '마일리지' 클릭과 상단 '마일리지 >' 버튼 클릭을 통해 마일리지에 대한 정보를 확인할 수 있습니다.
- '마일리지 현황' Section에서는 보유 마일리지, 총 적립 마일리지, 총 사용 마일리지에 대한 정보를 확인할 수 있습니다.
- '마일리지 적립 및 사용' Section에서는 Pannel UI를 통해 '마일리지 적립 내역'과 '사용 마일리지'에 대한 상세 정보를 확인할 수 있습니다.
  </br></br>

![mypage_counselling_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/ccc4c3b6-82dc-4f1c-8fe7-d001acebb052)
</br>

- 좌측 '1:1 문의 내역' 클릭 시 작성한 전체 문의 내역을 확인할 수 있으며, '1:1 문의 작성' 버튼을 클릭하면 문의 작성 페이지로 이동합니다.
- 문의유형 선택, 문의 제목, 문의 내용에 대한 유효성 검사를 진행하며, 미완료시 Modal을 통해 사용자에게 Feedback을 전달합니다.
  </br></br>

![mypage_counselling_checkout_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/c245e049-6126-4feb-a7e5-ee809fc6284d)
</br>

- 구매관련문의 유형 선택 시 주문번호조회 유효성이 추가되며, 주문번호에 해당하는 각 상품 선택이 가능합니다.
- 조회한 주문 상품에 해당하는 주문번호, 상품명, 주문일자, 결제방법이 반영되어 사용자 확인이 가능합니다.
  </br></br>

![mypage_counselling_product_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/e2c9343e-9ab0-4695-9930-ce9b1f93d273)
</br>

- 일반상담문의 유형 중 '상품문의' 선택 시 상품번호조회 유효성이 추가됩니다.
- 조회한 상품에 해당하는 상품명, 판매가 반영되어 사용자 확인이 가능합니다.
  </br></br>

![mypage_counselling_product_page](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/e2c9343e-9ab0-4695-9930-ce9b1f93d273)
</br>

- 좌측 '상품 Q&A내역' 클릭 시 상품에 대한 문의 내역만 확인이 가능합니다.
</br></br>
</details>

</details>


