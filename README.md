# 🛒 E-Commerce Application - 12st

![readme-banner img 001](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/88f40055-9def-4b5e-b7ac-0d9e0b2b0d37)

- <a href="https://12st-shopping-platform-re-nine.vercel.app/" target="_blank">배포 URL</a>

- <a href="https://github.com/nicehyun/12st-shoppingMall" target="_blank">리팩토링 전 프로젝트 소스 코드</a>

- Test Email & Password

```
Email : test@test.com
Password : test123123!
```

<br/><br/>

---

# 🪜 목차

## Table of Contents

- [설치 및 실행](#install)
- [프로젝트 소개](#introduce)
- [기술스택](#stack)
- [프레임워크 및 라이브러리 선택 이유](#reason)
- [디렉토리 구조](#directory)
- [유지보수성 개선](#maintainability-improvements)
- [사용자 경험 개선](#ux)

<br/><br/>

---

# <span id = "install">👨🏻‍🔧 설치 및 실행</span>

## 설치

```bash
# 프로젝트 클론
> git clone https://github.com/nicehyun/12st-shoppingPlatformRe.git

# 의존성 패키지 설치
> npm i
```

## 실행

```bash
# 개발 환경에서 프로젝트 실행
> npm run dev

# json-server의 Port는 NEXT_PUBLIC_DB_URL와 일치
> npx json-server --port 8080 --watch db.json
```

<br/><br/>

---

# <span id = "introduce">🪧 프로젝트 소개</span>

- 12st는 다양한 Brand의 상품을 한 곳에 모아 놓은 E-Commerce Platform 웹 애플리케이션으로 기존의 팀 프로젝트를 리팩토링한 프로젝트입니다.
- Naver Open API 상품 데이터를 활용한 E-commerce Platform입니다.
- RESTful API를 빠르게 모킹하기 위해 JSON Server를 사용합니다.
- 기존의 프로젝트는 `JavaScript`를 사용했기 때문에 런타임에서 오류가 발견되는 불편함이 있었습니다. 이로 인한 불안정성을 제거하기 위해 `TypeScript`를 사용했으며, 타입 단언과 `any`를 최대한 사용하지 않았습니다.
- 초기 페이지 로딩 시간 개선을 위해 `CSR` 프로젝트를 `SSR`로 변경했으며, `CSR` 컴포넌트의 경우 <a href="https://velog.io/@ish1610/Next-13-optimization#nextdynamic" target="_blank">First Load JS의 크기를 감소시키기 위해 `Next Dynamic Import`를 사용하여 초기 페이지 로딩 시간이 개선</a>되었습니다.
- <a href="https://velog.io/@ish1610/%ED%95%A8%EC%88%98%ED%98%95-%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D-Feat.-SRP" target="_blank">함수형 프로그래밍에 `SRP` 개념을 적용</a>하여 컴포넌트와 함수의 재사용성과 유지보수성이 향상되었습니다.
- `Single source of truth`개념에 어긋나는 `Server State`를 가져와 `Client State`로 관리했던 문제를 해결하기 위해 `Client State`는 `Redux`로, `Server State`는 `TanStack Query`로 관리합니다.
- 인증/인가 시 보안성 향상을 위해 <a href="https://velog.io/@ish1610/%EC%9D%B8%EC%A6%9D-%EC%9D%B8%EA%B0%80-With-Next.js" target="_blank">Refresh Token Rotation을 적용</a>했습니다.
- 계층별 분리 구조로 인한 유지 보수 시의 Cache Miss를 제거하기 위해 <a href="https://velog.io/@ish1610/%EC%A7%80%EC%97%AD%EC%84%B1%EC%9D%98-%EC%9B%90%EC%B9%99-%EB%94%94%EB%A0%89%ED%86%A0%EB%A6%AC-%EA%B5%AC%EC%A1%B0" target="_blank">
  지역성의 원칙 고려한 디렉토리 구조를 구성</a>했습니다.

</br></br>

---

# <span id = "stack">⚙️ 기술스택</span>

## 프레임워크

<img src="https://img.shields.io/badge/next.js 13.4.12-000000?style=for-the-badge&logo=nextdotjs&logoColor=white">
</br>

## 언어

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</br>

## UI 라이브러리

<div> 
  <img src="https://img.shields.io/badge/react 18.2.5-61DAFB?style=for-the-badge&logo=react&logoColor=white">
  <img src="https://img.shields.io/badge/mui 5.14.1-007FFF?style=for-the-badge&logo=mui&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss 3.3.3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">
<img src="https://img.shields.io/badge/swiper 10.3.1-6332F6?style=for-the-badge&logo=swiper&logoColor=white">
</div>

## 상태 관리 라이브러리

<div>
  <img src="https://img.shields.io/badge/tanstackquery 4.32.0-0088CC?style=for-the-badge&logo=reactquery&logoColor=white"> 
  <img src="https://img.shields.io/badge/redux 8.1.1-764ABC?style=for-the-badge&logo=redux&logoColor=white">
  <img src="https://img.shields.io/badge/redux toolkit 1.9.5-764ABC?style=for-the-badge&logo=redux&logoColor=white">
</div>

## Back End 라이브러리

<div>
  <img src="https://img.shields.io/badge/firebase 10.1.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
  <img src="https://img.shields.io/badge/firebase admin 11.10.1-FFCA28?style=for-the-badge&logo=firebase&logoColor=white">
</div>

## 기타 라이브러리

<div>
 <img src="https://img.shields.io/badge/eslint 8.45.0-4B32C3?style=for-the-badge&logo=eslint&logoColor=white">
<img src="https://img.shields.io/badge/prettier 2.8.7-F7B93E?style=for-the-badge&logo=prettier&logoColor=white">
<img src="https://img.shields.io/badge/jsonwebtokens 9.0.1-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white"> 
  <img src="https://img.shields.io/badge/bcrypt 5.1.1-EF2D5E?style=for-the-badge">
</div>

</br></br>

---

# <span id = "reason">💁🏻‍♂️ 프레임워크 및 라이브러리 선택 이유</span>

<a href="https://velog.io/@ish1610/library-select-reason" target="_blank">프레임워크 및 라이브러리 선택 이유 게시글</a>

</br></br>

---

# <span id = "directory">📂 디렉토리 구조</span>

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
├── 📂 tanstackQuery ✅ Tanstack 설정
├── 📂 redux ✅ Redux 설정, Feature 별 Slice
└── 📂 types ✅ next-auth.d.ts
```

지역성 원칙을 고려한 계층 기준이 아닌 코드가 속하는 기능에 따른 구조를 기준으로 디렉토리 구조를 구성했습니다.

이를 통해 유지 보수 시 캐시 미스를 줄이고자 했습니다.

</br></br>

---

# <span id ="maintainability-improvements">🔧 유지보수성 개선</span>

앞서 언급한 Next.js의 `File-Based Routing`과 지역성의 원칙을 고려한 디렉토리 구조와 `TypeScript` 적용 외에도 유지 보수성 개선을 위해 많은 고민을 했습니다.

## `액션`과 `계산`을 분리하고 `SRP` 개념을 적용

```typescript
// 🚀 주소 정보 가공
export const parseAddressFromCheckoutFormEvent = (formData: FormData) => {
  return {
    deliveryName: formData.get("deliveryName") as string,
    recipient: formData.get("recipient") as string,
    zipcode: formData.get("zipcode") as string,
    address: formData.get("address") as string,
    additionalAddress: formData.get("additionalAddress") as string,
    phone1: formData.get("phone1") as string,
    phone2: formData.get("phone2") as string,
    defalutAddressRegistration: formData.get("defalutAddressRegistration") as
      | "on"
      | null,
  }
}

// 🚀 배송 메모 정보 가공
export const parseMemoFromCheckoutFormEvent = (formData: FormData) => {
  const selectedDeliveryMemo = formData.get("deliveryMemo-select")

  if (!selectedDeliveryMemo)
    return {
      deliveryMemo: null,
    }

  if (selectedDeliveryMemo === "직접입력")
    return {
      deliveryMemo: formData.get("deliveryMemo-direct") as string,
    }

  return {
    deliveryMemo: selectedDeliveryMemo,
  }
}

// 🚀 구매 약관 정보 가공
export const parseClauseFromCheckoutFormEvent = (
  event: FormEvent<HTMLFormElement>
) => {
  const formData = new FormData(event.currentTarget)

  return {
    collectionOfUserInfo: formData.get("collectionOfUserInfo") as string,
    provisionOfUserInfo: formData.get("provisionOfUserInfo") as string,
    paymentAgencyClause: formData.get("paymentAgencyClause") as string,
  }
}
```

`계산` 함수인 `formData` 가공 함수가 단일책임원칙에 부합하기 위해 한 번에 모든 `formData`를 가공하는 것이 아닌 주소 정보, 배송 메모 정보, 구매 약관 정보 등으로 각 관심사에 해당하는 데이터를 가공하도록 했습니다.

```typescript
export const validCheckFromCheckoutFormEvent = (formData: FormData) => {
  const { additionalAddress, address, phone1, recipient } =
    parseAddressFromCheckoutFormEvent(formData)

  if (!nameValidator(recipient)) {
    return {
      isValid: false,
      message: "올바른 수령인 이름을 입력해주세요.",
    }
  }

  if (!address) {
    return {
      isValid: false,
      message: "배송지 주소를 입력해주세요.",
    }
  }

  if (!additionalAddressValidator(additionalAddress)) {
    return {
      isValid: false,
      message: "올바른 배송지 상세 주소를 입력해주세요.",
    }
  }

  if (!phoneValidator(phone1)) {
    return {
      isValid: false,
      message: "올바른 연락처를 입력해주세요.",
    }
  }

  return {
    isValid: true,
  }
}
```

`submit` 전 유효성 검사 함수를 통해 가공된 데이터의 유효성을 검사를 진행합니다.

유효성 검사 함수도 `계산` 함수로 만들기 위해 유효성에 대한 결과를 반환합니다. 해당 함수를 통해 Client에서 유효성 검사 진행 후 Mutation 함수를 실행시킵니다.

```typescript
const handleCheckoutSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const { isValid, message } = handleCheckoutValidCheck(
    event,
    totalPriceOfCheckedProduct,
    discountedPriceWithCoupon
  )

  if (!isValid && message !== undefind) {
    // 🚀 isValid가 false 경우 Feedback modal
    showFeedbackModalWithContent(message)

    return
  }

  // ... 🚀 isValid가 true일 경우 Mutation
}
```

앞서 생성한 `formData` 가공 함수는 유효성 검사 함수에서만 사용하는 것이 아닌 api route에서도 사용합니다. 또한 api route에서도 `formData`에 대한 유효성 검사를 한번 더 진행하기 때문에 유효성 검사 함수를 그대로 사용합니다.

```typescript
// api route

export async function POST(request: NextRequest) {
  // ... 생략

  // 🚀 유효성 검사 함수
  const { isValid, message } = validCheckFromCheckoutFormEvent(formData)

  if (!isValid) {
    return NextResponse.json({
      status: 401,
      error: message,
    })
  }

  // ... 🚀 form data 가공 함수

  // ... 생략
}
```

이를 통해 많은 중복 코드가 제거되었습니다.

만약 유효성 검사 로직이 추가되거나 수정된다면 유효성 검사 함수만 수정해주거나 갈아끼우면 되기때문에 유지보수성 측면에서 큰 개선이 되었습니다.

무한 스크롤 기능에도 `SRP` 개념을 적용해주었습니다.

```typescript
// 🚀 상품 리스트 무한 스크롤

export const useProductListInfinityQuery = ({
  queryKey,
  promiseFn,
  cacheTime = 60 * 60 * 1000,
  staleTime = 60 * 60 * 1000,
  initialData,
}: ICustomInfinityQuery) => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(queryKey, ({ pageParam = 1 }) => promiseFn(pageParam), {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.productList.length < 12) return false

        return pages.length + 1
      },
      staleTime,
      cacheTime,
      initialData: !initialData
        ? undefined
        : {
            pages: [
              {
                productList: initialData.productList,
                totalCount: initialData.totalCount,
              },
            ],
            pageParams: [undefined],
          },
    })

  // 🚀 observer 관심사 분리
  const { loadMoreRef } = useInfinityScrollIntersectionObserver({
    fetchNextPage,
    hasNextPage,
    isFetching,
  })

  ...

```

상품 리스트 InfiniteQuery에서 `observer`를 관리하는 hook을 별도로 만들어 주어

상품 리스트 InfiniteQuery는 api 호출과 응답만 관리하도록 해주어 `useProductListInfinityQuery` hook을 사용하지 않고 다른 InfiniteQuery에서도 재사용할 수 있도록 해주었습니다.

</br></br>

---

# <span id ="ux">🧑🏻‍💻 사용자 경험 개선</span>

## SSR Hydration

기존 프로젝트의 경우 상품 리스트 페이지가 렌더링 될 때 아래의 단계를 거쳐야 했습니다.

1. 첫 페이지 렌더링 Loading UI
2. 데이터 fetch 시 Skeleton UI
3. 상품 리스트 렌더링 완료

이 과정에서 사용자는 2번의 Loading을 기다려야 하는 문제점으로 인해 사용자 경험이 감소되었습니다.

```typescript
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

상품 리스트를 렌더링하는 페이지들에 TanStack-Query의 `prefetchQuery`를 사용하여 상품의 데이터를 Pre-Fetching합니다.

Skeleton UI가 아닌 상품들을 바로 확인할 수 있도록 하여 Loading을 기다려야하는 2번째 단계를 제거하여 첫 페이지 렌더링 이후 바로 상품 리스트를 확인할 수 있도록 해주었습니다.

</br></br>

## 명확한 Feedback

![feedback](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/58521ca2-0c6a-4a53-a038-e4ca92a9bf72)

사용자와 상호작용하는 `mutation`과 연결된 모든 액션들이 사용자에게 `mutation`에 대한 명확한 Feedback을 전달합니다.

애플리케이션의 Feedback 유형은 아래와 같습니다.

</br>

### `mutation`에 필요한 사용자 입력값에 대한 유효성이 미충족일 경우 상세 Feedback 전달

```typescript
const handleCheckoutSubmit = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault()

  const { isValid, message } = handleCheckoutValidCheck(
    event,
    totalPriceOfCheckedProduct,
    discountedPriceWithCoupon
  )

  if (!isValid && message !== undefind) {
    // 🚀 isValid가 false 경우 Feedback modal
    showFeedbackModalWithContent(message)

    return
  }

  // ...
}
```

앞서 생성한 유효성 검사 함수를 이용해서 `valid`가 false일 경우 `message`를 Feedback Modal을 통해 사용자에게 보여줍니다.

</br>

### 특정 단계를 건너뛰고 URL을 통해 특정 기능에 접근 시 Feedback 전달 후 Route Modal 마운트

```typescript
useEffect(() => {
  if (checkoutPendingProductList.length === 0) {
    showFeedbackModalWithContent(
      "결제 상품이 존재하지 않아 장바구니로 이동합니다."
    )
    routeTo(ROUTE.CART)
  }
}, [checkoutPendingProductList])
```

만약 사용자가 장바구니 페이지나 상품 상세 페이지에서 결제하기 button을 클릭하고 결제 페이지로 이동한 것이 아닌 `URL`을 직접 입력해 결제 페이지도 이동한 경우 Feedback 전달 후 Route되도록 했습니다.

</br>

### `mutation` 결과에 대한 Feedback 전달 ( Success - 200, Fail - 401, 404, 500 )

```typescript
export async function POST(request: Request) {

  // ...

  if (!accessToken || !verifyAccessToken(accessToken)) {
    return NextResponse.json({
      status: 401,
      error: "유효하지 않은 AccessToken입니다.",
    })
  }

//  ...

  const { valid, message } = validCheckProductInfo(productInfo)

  if (!valid) {
    return NextResponse.json({
      status: 401,
      error: message,
    })
  }

  // ...

    return NextResponse.json({
      status: 200,
    })
  } catch (error: unknown) {
    throw error
  }
}
```

api route의 Response 객체에 담긴 `error`에 포함된 상세 Feedback을 사용자에게 보여줍니다.

</br>

- `mutation`이 진행 중일 경우 Loading UI, Cursor-Not-Allowed, BackGround Color 변경 등을 이용

```typescript
const LoadingButton = ({
  className,
  isLoading,
  isDisabled,
  onClick,
  content,
  spinnerSize = "md",
  type = "button",
}: ILoadingButton) => {
  const loadingSpinnerSize =
    spinnerSize === "sm"
      ? { height: "h-[26px]", width: "w-[26px]" }
      : { height: "h-[26px]", width: "w-[26px]" }

  return (
    <Button
      type={type}
      onClick={onClick}
      isDisabled={isLoading || isDisabled}
      content={
        isLoading ? (
          <Loading spinnerSize={loadingSpinnerSize} isFrame={false} />
        ) : (
          content
        )
      }
      classNames={className}
    />
  )
}
```

모든 submit button에 `mutation`의 `isLoading`이 true일 경우 spinner UI가 렌더링 되도록 해주었습니다.

이를 통해 사용자가 자신의 Action의 진행 상태를 명확하게 알 수 있도록 해주었습니다.

### 실시간 유효성 검사 결과 확인

![feedback2](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/3fdc463e-e29c-4c45-85f9-e79d4cbfda98)

사용자 입력값을 관리하는 `useUserInput` hook을 사용해 사용자에게 실시간 피드백을 전달합니다.

```
  const {
    value: emailInputValue,
    handleValueChange: handleEmailInputValueChange,
    handleInputBlur: handleEmailInputBlur,
    hasError: hasErrorEmail,
    isValid: isEmailValid,
    reset,
  } = useUserInput(emailValidator)
```

유효성 검사 함수 `emailValidator`는 submit 전 유효성 검사에서 사용하는 함수와 동일하기 때문에 이를 이용해 사용자에게 `isValid`가 true가 되어 `mutation`이 가능하다고 실시간으로 피드백을 전달하도록 했습니다.

```typescript
<SignUpFeedback
  isValid={isEmailValid}
  content="example@example.com 형식의 이메일"
/>
```

</br></br>

## Layout Shift 제거

![layoutshift](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/3fc3e32a-69c4-4f8a-927f-98617b52a896)

```typescript
const { productListInCart, isLoading } = useGetProductListInCartQuery()

// 🚀 isLoading이 true일 경우 Skeleton UI 렌더링
if (isLoading) {
  return <SkeletonProductListInCart />
}
```

TanStack Query의 `prefetchQuery`를 사용하지 않는 경우 Skeleton UI를 통해 Layout Shift를 제거했습니다.

</br></br>

## Infinity Scroll

![infinity](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/13bbc450-fb60-46e4-9154-491bad8e80e1)

상품 리스트 페이지는 끊김 없는 상품 탐색을 위해 TanStack Query의 `useInfiniteQuery`와 `IntersectionObserver`를 사용하여 Infinity Scroll를 구현했습니다.

```typescript
export const useProductListInfinityQuery = ({
  queryKey,
  promiseFn,
  cacheTime = 60 * 60 * 1000,
  staleTime = 60 * 60 * 1000,
  initialData,
}: ICustomInfinityQuery) => {
  const { showFeedbackModalWithContent } = useFeedbackModal()

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching } =
    useInfiniteQuery(queryKey, ({ pageParam = 1 }) => promiseFn(pageParam), {
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.productList.length < 12) return false

        return pages.length + 1
      },

      ... options

      initialData: !initialData
        ? undefined
        : {
            pages: [
              {
                productList: initialData.productList,
                totalCount: initialData.totalCount,
              },
            ],
            pageParams: [undefined],
          },
    })

  const { loadMoreRef } = useInfinityScrollIntersectionObserver({
    fetchNextPage,
    hasNextPage,
    isFetching,
  })

  const isLoadMoreFetching = isFetching && hasNextPage

  return {
    data,
    isLoading,
    isLoadMoreFetching,
    loadMoreRef,
  }
}

```

`IntersectionObserver` API를 사용해 `loadMoreRef`의 가시성 변화를 감지하도록 해주었습니다.

```typescript
<FourGridProductList className="mt-[50px]">
  {productList?.pages?.flatMap((group) =>
    group.productList.map((product) => {
      return (
        <ProductCard
          key={`${sectionClassification}-product-${product.id}`}
          productInfo={product}
          isPriority
        />
      )
    })
  )}

  <div ref={loadMoreRef} />
</FourGridProductList>
```

`loadMoreRef`가 View Port에 나타날 경우 `useInfiniteQuery`의 함수 `fetchNextPage`가 실행되어 사용자는 끊임 없는 상품 탐색이 가능해집니다.

</br></br>

## Pannel

![pannel](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/a8339f0e-6cbd-4b79-87ed-817f337075ac)

정보 밀도가 높은 Page의 경우 Pannel을 적용하여 한정된 공간에서 사용자의 사용 효율이 증가될 수 있도록 했습니다.

```typescript
// 회원 정보 수정 페이지

const ModificationOfUserInfoSection = () => {
  const { handleTabValueChange, tabValue } = useTabValueHandler()

  const tabs = ["회원정보", "기본배송지 수정", "약관동의", "회원탈퇴"]

  // 각 Tab Pannel 별 렌더링할 컴포넌트
  const modificationOfUserInfoComponents = [
    <UserInfo key="mypage-userInfo-modification__userInfo" />,
    <DeliverInfoModification key="mypage-userInfo-modification__deliveryInfo" />,
    <ClauseModification key="mypage-userInfo-modification__clause" />,
    <MemberTermination key="mypage-userInfo-modification__memberTerminate" />,
  ]

  return (
    <section>
      <SectionTitle title="회원정보 수정" />

      <CustomTabs
        id="cancelList"
        onChangeTabs={handleTabValueChange}
        tabs={tabs}
        tabsValue={tabValue}
      />

      {modificationOfUserInfoComponents.map((modificationEl, index) => (
        <Fragment key={modificationEl.key}>
          <CustomTabPanel value={tabValue} index={index}>
            {modificationEl}
          </CustomTabPanel>
        </Fragment>
      ))}
    </section>
  )
}
```

사용자는 선택한 Tab에 해당하는 컴포넌트만 확인할 수 있도록 필요한 정보만 노출되도록 했습니다.

위와 같이 Pannel을 사용하는 경우는 많은 데이터를 사용자에게 보여주어야 합니다. 때문에 페이지 로딩 시에도 비교적 긴 시간이 소요됩니다.

```typescript
const DynamicSignUpPhoneVerificationInput = dynamic(
  () => import("./SignUpPhoneVerificationInput"),
  { ssr: false }
)

const DynamicSignUpEmailInput = dynamic(() => import("./SignUpEmailInput"), {
  ssr: false,
})

const DynamicSignUpNameInput = dynamic(() => import("./SignUpNameInput"), {
  ssr: false,
})
const DynamicSignUpPasswordInput = dynamic(
  () => import("./SignUpPasswordInput"),
  { ssr: false }
)
```

첫 Tab을 제외한 나머지 Tab의 컴포넌트는 동적으로 렌더링되도록 해주어 페이지 로딩 시간이 개선되도록 해주었습니다.

</br></br>

### Media Query

![mediaquery](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/b68fbaab-444b-4104-813c-cb19d6ecc28c)

```typescript
// tailwin.config.js

screens: {
  sm: { max: "479px" },
  md: { min: "480px", max: "767px" },
  lg: { min: "768px", max: "1023px" },
  xl: { min: "1024px" },
},
```

4가지의 Media Query 적용을 통해 다양한 디바이스에서 웹 애플리케이션을 보다 편리하게 이용할 수 있도록 해주었습니다.

</br></br>
