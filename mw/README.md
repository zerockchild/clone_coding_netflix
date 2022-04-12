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