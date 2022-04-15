# mw

### Direactory 구조

app - App.js, store.js 등 App 기능 파일 모음
assets - 이미지, 문서 등 어플리케이션에 필요한 자원 모음
common - css, component, hook(util) 등 공통적으로 사용하는 파일 모음
domain - url에 따른 파일 모음
routes - Router 파일
style - styled-component 등을 사용했을 때 커스텀 Style 모음
trunks - 프로젝트를 진행하면서 사용하지 않게된 코드 모음

### Redux ToolKit > React-Query 변경

Redux는 보일러플레이트가 많고, 서버와 동기화가 되지 않기 때문에 지속적인 관리가 필요하다.

하지만 React-Query는 간결한 코드와 서버와 동기화 되는 데이터로 가독성, 유지보수, 재사용성을 모두 갖춘 코드 작성이 가능하다.

### Error 모음

1. Next.Js SSR 개발시 발생한 문제점
https://codesandbox.io/s/goofy-swirles-xzpir?file=/pages/_app.js <<< 이 코드에서 문제점 발생   
- App 컴포넌트 내부에서 QueryClient 생성해서 쿼리가 저장되지 않는 현상 발생

App 컴포넌트 외부에 QueryClient 생성시 기존 사용자의 정보가 다른 사용자에게 사용될 수 있다.   
때문에 App 컴포넌트 내부에 QueryClient 객체를 생성하고 useRef를 사용해서 재생성 조건을 구성한다.   
https://github.com/tannerlinsley/react-query/issues/2072   
https://github.com/tannerlinsley/react-query/commit/862bb2be3a7c6161b70a2310f4661859adb6d943?diff=split

의문점: Next.JS가 아니어도 발생할 문제이지 않을까?? 때문에 App.js 코드를 useRef를 사용하도록 변경!