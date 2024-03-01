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
- 프로젝트의 상품 데이터는 11번가의 상품 데이터 오픈 API를 가공하여 사용합니다.
- RESTful API를 빠르게 모킹하기 위해 JSON Server를 사용합니다.
- 기존의 프로젝트는 `JavaScript`를 사용했기 때문에 런타임에서 오류가 발견되는 불편함이 있었습니다. 이로 인한 불안정성을 제거하기 위해 `TypeScript`를 사용했으며, 타입 단언과 `any`를 최대한 사용하지 않았습니다.
- 초기 페이지 로딩 시간 개선을 위해 `CSR` 프로젝트를 `SSR`로 변경했으며, `CSR` 컴포넌트의 경우 <a href="https://velog.io/@ish1610/Next-13-%EC%B5%9C%EC%A0%81%ED%99%94#nextdynamic" target="_blank">First Load JS의 크기를 감소시키기 위해 `Next Dynamic Import`를 사용하여 초기 페이지 로딩 시간이 개선</a>되었습니다.
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

## Next.js

![img](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/41a76c86-26dc-4a57-b620-bf6167b9d71a)

Next.js 프레임워크를 선택한 이유는 아래의 Next.js의 특징들 때문입니다.

- 서버 사이드 렌더링 (SSR): SSR은 사용자에게 더 빠른 페이지 로딩 시간을 제공하며, SEO에도 큰 이점을 줍니다.

- 자동 코드 스플리팅: Next.js는 자동 코드 스플리팅을 제공하기 때문에 필요로 하는 코드만 로드하여 애플리케이션의 성능을 개선합니다. 각 페이지에 필요한 자바스크립트만 로드하기 때문에, 초기 로딩 시간이 단축할 수 있습니다.

- 간편한 페이지 라우팅: `File-Based-Routing` 시스템을 사용하여, 라우트를 쉽게 설정할 수 있습니다. 해당 라우트 폴더 내부에 `page` 디렉토리에 추가하기만 하면, Next.js가 자동으로 해당 경로에 대한 라우팅을 처리합니다. 이를 통해 개발 속도를 높이고, 프로젝트의 구조를 명확하게 할 수 있습니다.

- 빌드 최적화와 성능: Next.js는 최적화된 빌드 설정을 제공하여, 애플리케이션의 성능을 향상시킵니다. 예를 들어, 이미지 최적화, `Auto Static Optimization`, API 라우트 등의 기능을 들이 있습니다.

위의 특징들은 기존 프로젝트를 효과적으로 리팩토링할 수 있도록 해주었습니다.

### 성능 최적화</h3>

기존 프로젝트의 경우 초기 로딩 속도가 매우 느렸고, 이미지 크가가 커 이미지 로딩 속도도 길었습니다.

이를 개선하기 위해 Next.js를 선택한 것은 효과적이었습니다.

- 로딩 속도 개선을 위한 SSR 적용
- 이미지 크기 최적화를 위한 Image 사용
- 자동화된 코드 스플리팅
- First Load JS 크기 개선을 위해 Next Dynamic Import 사용

Next.js는 기본적으로 애플리케이션을 다양한 측면에서 효과적인 최적화를 해주고 개발자가 추가로 필요하다고 생각하는 부분에 추가 최적화를 진행해주면 되었기 때문에 매우 편리했습니다.

성능 최적화의 개선이 나아가 사용자 경험 개선까지 이어질 수 있었습니다.
</br>

### 유지 보수성 향상

기존 프로젝트의 경우 프로젝트 구조가 직관적이지 않았습니다. 이는 데이터의 지역성을 고려하지 못 하고 구성한 프로젝트 구조도 한 몫 했을 것입니다.

하지만 client와 server를 별로도 분리해서 관리했기 때문도 있었습니다.

Next.js의 File-Based-Routing을 통해 프로젝트 구조의 직관성을 개선할 수 있었습니다. 그리고 API 라우트를 쉽게 생성하고 관리할 수 있는 이점을 통해 프론트엔드와 백엔드 로직을 하나의 프로젝트 내에서 통합 관리하기 용이 했습니다.

이러한 이유들로 Next.js를 선택하여, 초기 페이지 로딩 성능을 개선하고, 개발 과정을 효율적으로 만들고자 했습니다.

</br></br>

## Redux

![제목을-입력해주세요_-001 (2)](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/57e2baff-4fc0-43dd-be7e-88a9b37e4693)

기존 프로젝트의 경우 전역 상태 관리를 Context API를 사용했습니다. 이로 인한 아래와 같은 문제가 발생했습니다.

- **성능 문제** : Context의 값이 변경되면 해당 Context를 Provide하는 모든 컴포넌트가 리렌더링됩니다. 이는 필요하지 않은 컴포넌트까지 리렌더링되게 하여 성능 문제가 발생했습니다.

- **상태 관리의 복잡성 증가** : Context API는 전역 상태 관리를 위해 설계되었지만, 상태 업데이트 로직을 관리하는 내장 메커니즘이 없습니다. 때문에 복잡한 상태 관리 로직을 구현하기 위해 `useReducer` hook을 같이 사용해야 했습니다. 추가로 불변성 보장을 위해 작성된 로직은 코드의 장황함을 유발했습니다.

- **컴포넌트 재사용성 감소** : 특정 Context에 의존하는 컴포넌트는 해당 Context 없이는 재사용하기 어렵습니다. 때문에 컴포넌트의 재사용성이 감소되었습니다.

리팩토링 과정에서 프로젝트의 규모가 큰 상황을 가정했기 때문에 위의 문제를 제외하더라도 `Wrapper Hell`의 문제도 생각해야 했습니다.

위의 이유로 전역 상태관리 라이브러리를 사용을 결심했습니다.

### Recoil VS Redux

상태관릴 라이브러리 `Recoil`과 `Redux` 중 어떤 라이브러리를 선택할지 많은 고민을 했습니다.

우선 `Recoil`은 아래의 장・단점이 있습니다.

- 장점

  1. React의 기능과 패러다임을 활용하여 설계되어 직관적으로 느껴질 수 있고, `useState` Hook과 비슷하게 작동합니다.
  2. `atoms`을 통해 상태를 관리하며, 독립적인 각 atom을 통해 세분화된 컴포넌트 상태 관리가 가능합니다.
  3. 필요로 하는 상태에만 Subscribe하도록 해, 관련 없는 상태 변화에 대한 불필요한 리렌더링을 방지합니다.
  4. 비동기 처리에 사용되는 `Selctor`를 통해 같은 응답을 보내는 api call에 대해서는 추가적으로 요청하지 않아 성능적으로 유리합니다.

- 단점
  1. Redux에 비해 상대적으로 이후에 등장했기 때문에 커뮤니티와 생태계가 비교적 작습니다.
  2. 직접 불변성을 보장하는 로직을 작성해야 합니다.
  3. Recoil팀을 해체 이슈와 작성일 기준 최근 업데이트는 1년 전입니다.

다을으로 `Redux`은 아래의 장・단점이 있습니다.

- 장점

  1. Redux의 엄격한 아키텍처(Action, Reducer, Store)를 통한 상태 변화의 예측 가능성을 높여 줍니다.
  2. Redux DevTools와 같은 강력한 개발자 도구를 통해 변경 사항을 되돌리거나 재생할 수 있게 해줍니다.
  3. 오랫동안 사용되어 온 라이브러리로, 방대한 커뮤니티와 풍부한 생태계를 자랑합니다.
  4. 비동기 작업, 로깅, API 호출 등을 처리할 수 있는 미들웨어를 가지고 있습니다.

- 단점
  1. RTK(Redux Tool Kit)를 사용하더라도 상대적으로 많은 보일러 플레이트 코드를 발생시킵니다.
  2. `Redux-saga`를 사용해서 서버를 관리할 경우 기존 러닝 커브를 한층 더 높입니다.
  3. `useSelector`애 전달한 함수의 반환 값이 변경으로 인한 불필요한 리렌더링을 발생시킬 수 있습니다.

위의 `Recoil`과 `Redux` 장・단점을 비교하고 내린 결과는 다음과 같았습니다.

`Recoil`의 `useState` Hook과 비슷하게 작동한다는 점은 확실한 이점이라 판단했습니다.

필요한 상태만 Subscribe하여 불필요한 리렌더링을 방지한다는 이점은 `Redux`에서 충분히 가능하다고 생각했습니다.

<span id = "useSelector"></span>

```typescript
export const selectIsAllChecked = (state: RootState) => state.cart.isAllChecked

export const selectCheckedProductList = (state: RootState) =>
  state.cart.checkedProductList

export const selectPendingRemovalProduct = (state: RootState) =>
  state.cart.pendingRemovalProduct
```

`Redux`의 `useSelector`에 위와 같이 세분화된 함수를 사용한다면 `Recoil`처럼 불필요한 리렌더링을 충분히 방지할 수 있습니다.
덕분에 `Redux`의 불필요한 리렌더링을 일으키는 단점도 사라지게 되었습니다.

`Recoil`의 `Selctor`를 사용한 간단한 비동기 처리와 Cache 기능도 강력한 이점 중 하나라고 생각합니다.

```typescript
// Next 13 fetch API

const response = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
  {
    headers: {
      "Content-Type": "application/json",
      authorization,
    },
    // 🚀 Cache Time 설정
    next: { revalidate: 3600 },
  }
)
```

하지만 Next.js 13에서 제공하는 확장된 `fetch` API에서도 응답을 보내는 api call에 대해서 Memoization 기능을 제공하기 때문에 큰 이점으로 다가오지 않았습니다. 하지만 `Redux-saga`보다 간편한 비동기 처리는 확실히 큰 이점이라 생각됩니다.

`Recoil`의 가장 치명적인 단점으로는 최근 업데이트가 1년 전이라는 것입니다. 아무리 많은 장점을 보유했다고 해도 사용이 꺼려지는 점이었습니다.

`Redux`의 경우 장점 중 1 ~ 3번은 확실히 큰 이점으로 작용될 것이라 판단되었지만, 이중 가장 큰 이점은 `Flux` 패턴을 위한 엄격한 아키텍쳐를 통한 큰 규모의 애플리케이션에서 데이터의 흐름이 용이하다는 것입니다.

앞서 언급했듯 프로젝트를 규모가 큰 상황을 가정했기 때문에 이에 부합하는 장점이었습니다.

많은 보일러 플레이트 코드와 RTK를 사용해도 여전히 발생하는 보일러 플레이트 코드를 발생시키는 `Redux`의 단점에 대해서는 개인적으로 `Redux`의 사용이 꺼져진다라고 생각이 들 정도의 단점이라 생각하지 않습니다.

무엇보다 `Redux`의 `Single source of truth, State is read-only, Changes are made with pure functions` 세 가지 원칙은 너무나도 매력적이라 생각합니다.

</br></br>

## TanStack-Query

![제목을-입력해주세요_-001 (1)](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/b3c40d5a-7f7f-4d28-8965-256b7f529c14)

앞서 언급했든 Next.js 13에서 제공하는 확장된 `fetch` API에서 응답을 보내는 api call에 대해서 Memoization 기능을 제공합니다.

```typescript
// Next 13 fetch API

const response = await fetch(
  `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout`,
  {
    headers: {
      "Content-Type": "application/json",
      authorization,
    },
    // 🚀 Cache Time 설정
    next: { revalidate: 3600 },
  }
)
```

때문에 `TanStack-Query`의 사용을 고민했습니다.

단순히 Cache 기능만 생각한다면 `TanStack-Query`가 없어도 `fetch` API만으로 충분하다 생각했을 것입니다.

하지만 `fetch` API를 사용할 경우에 발생하는 아래의 문제들을 통해 대체 불가능이라는 판단을 내렸습니다.

- `fetch` API는 Memoization 기능을 제공하지만 설정된 Cache Time이 지나지 않으면 데이터 무효화가 불가능합니다.
- `fetch` API를 사용해 가져온 데이터를 Client State에 관리해야 합니다. 이는 `Single source of truth`에 부합하지 않습니다.

위의 문제로 인해 `Server State`를 관리해줄 라이브러리 사용이 필요했습니다.

### RTK Query VS TanStack Query

`Server State`관리를 위한 라이브러리로 `RTK Query`와 `TanStack Query` 둘 중 고민을 했습니다.

이미 `Client State`관리에 `Redux`를 사용하고 RTK를 추가로 사용하고 있었기 때문에 많은 고민을 하게되었습니다.

아래의 이미지는 `RTK Query`와 `TanStack-Query`을 비교하는 테이블입니다.

<img width="397" alt="RTK vs TanStack" src="https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/a9eb20b9-2bc8-4499-b0b8-01b16d4aa8e9">

두 라이브러리 모두 유사한 기능을 제공하지만, 차이점도 존재합니다.

- `RTK Query`는 선언적 API 정의를 사용하는 반면, `TanStack-Query`는 사용시 선언적 또는 내부적으로 API를 정의합니다. 이는 `TanStack-Query`가 더 유연하게 API 호출을 구성할 수 있음을 의미합니다.
- `RTK Query`는 엔드포인트와 직렬화된 인자들을 기반으로 캐시하는 반면, `TanStack-Query`는 사용자 정의 쿼리 키를 통해 캐시합니다. 이는 `RTK-Query`가 캐시를 더 세밀하게 제어할 수 있게 해주며, 복잡한 쿼리 구조를 가진 애플리케이션에 더 적합할 수 있습니다.
- `RTK Query`는 타입별 또는 타입/ID별로 선언적으로 데이터 무효화와 갱신을 처리하는 반면, `TanStack-Query`는 캐시 키를 기반으로 수동으로 이를 처리합니다. 이는 더 세밀한 제어를 원할 때 `TanStack-Query`가 더 적합할 수 있습니다.
- `TanStack-Query`는 무한 스크롤링을 지원하는 반면, `RTK Query`는 이를 아직 지원하지 않습니다. 무한 스크롤링이 필요한 애플리케이션의 경우, `React-Query`가 더 나은 선택일 수 있습니다.

이미 상태관리를 `Redux`를 사용해 하고 있었고, `Client State`와 `Server State`의 관리를 모두 `redux`로 할 수 있다는 이점을 생각한다면 `RTK Query`를 사용하는게 당연하게 느껴졌습니다.

하지만 `TanStack-Query` API의 유연성, 캐시 제어의 세밀함, 무한 스크롤링 지원 등의 이점 또한 매우 크게 느껴졌습니다.

```typescript
// 🚀 RTK Query

const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "posts",
    }),
  }),
})

export const { useGetPostsQuery } = apiSlice

// 🚀 TanStack-Query

const { data, error, isLoading } = useQuery("posts", () =>
  fetch("/api/posts").then((res) => res.json())
)
```

위의 간단한 예시 코드에서 알 수 있듯이 `TanStack-Query`는 `Server State` 관리를 위한 더 단순하고 직관적인 API를 제공하는 반면, `RTK Query`는 `Redux`의 전체적인 아키텍처 내에서 작동합니다. 때문에 개발자 경험 측면에서는 `TanStack-Query`가 더 이점이 있다 판단했습니다.

그리고 `TanStack-Query`를 사용함으로써 `Client State`와 `Server State` 관리를 명확히 분리할 수 있으며, 각각에 가장 적합한 도구를 선택하여 사용하는 것이 전체 애플리케이션 아키텍처에 더 유리하다고 판단했습니다.

</br></br>

## <span id = "TailwindCSS">TailwindCSS</span>

![제목을-입력해주세요_-001 (1)](https://github.com/nicehyun/12st-shoppingPlatformRe/assets/85052351/94d9e730-a2a1-4419-bd7b-ea65d22cd080)

대부분의 `CSS-in-JS` 라이브러리들이 쓰는 방식은 `Runtime CSS-in-JS` 또는 `Runtime stylesheets`입니다.

스타일을 정의하는 코드가 클라이언트 런타임 때 실행되는 JS 번들에 포함되는 방식인데 브라우저는 스타일 코드를 해석하지 못하므로 라이브러리의 코드도 JS 번들에 포함되어야 합니다.

이러한 방식으로 인해 발생하는 단점이 2가지 존재합니다.

- JS 번들 용량 증가: 스타일 코드와 라이브러리 런타임 코드가 클라이언트로 전달
- 페이지 렌더링 시간 증가: JS에 작성된 CSS 코드를 구문 분석하고 동적으로 추가하면서 Scripting 시간 증가

위의 두 가지 단점은 결국 사용자 경험과도 연결되는 점이기도 합니다.

하지만 이는 CSR 환경을 바탕으로 두고 구상한 방법이었기 때문에 SSR 환경에서 문제가 나타납니다.

SSR에서 `CSS-in-JS` 라이브러리를 그대로 사용하면 `hydrate` 이전 서버에서 받아오는 HTML에 잠깐 css가 전혀 적용되지 않습니다. 때문에 초기 HTML에 포함되는 요소에 대한 CSS인 `Critical CSS`를 서버쪽에서 사용할 수 있도록 하는 처리가 필요합니다.

이 때 `Critical CSS`에 대한 코드는 클라이언트 쪽에서 실행될 JS에도 포함되어야 하기 때문에 동일한 스타일에 대한 코드가 초기 HTML에서 한 번, JS 번들에서 두 번 클라이언트에게 전달되는 문제가 발생하게 됩니다.

특히 Next.js 13 버전에서는 SSR 처리를 한 페이지에 해당되는 HTML를 활용하는 방식으로 구현했기에 서버 컴포넌트와 방향이 충돌합니다.

`Tailwind CSS`는 Utility CSS로 className을 컴포넌트가 아니라 기능에 붙임으로써 CSS의 문제를 해결합니다. utility CSS이므로 필요에 따라 확장성있게 CSS를 작성할 수 있고, 빌드 시에 사용하지 않는 클래스는 제거되어 번들 크기에 주는 영향도 줄일 수 있고, atomic한 특성으로 인해 프로젝트의 크기가 거대해져도 스타일시트의 크기가 비례해서 늘어나지 않는 이점이 있습니다.

SSR 관점에서 중요한 건 런타임에 스타일시트를 생성하지 않고 빌드 타임에 스타일시트를 가져오는 방식이라는 점입니다.

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
