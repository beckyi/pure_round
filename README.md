# pure_round
Manually implement from one to ten directly.

<hr/>

## [ui] setting babel & webpack

#### _[ babel (dependency) ]_
| NPM >>> @babel/core @babel/preset-env @babel/preset-react @babel/cli

    - @babel/core 
        babel 플러그인을 모아 둔 것 (Babel이 제공하는 공식 프리셋)
    - @babel/preset-env
        for compiling ES2015+ syntax

    - @babel/cli
        babel 명령어 실행 (실습: trans)
        -w : 파일 내 변경 사항을 자동으로 감지하여 트랜스파일 (--watch)
        -d : 결과물 저장 경로 (--out-dir)

    - babel.config.js vs .babelrc
        babel.config.js
            전체 설정 파일
        .babelrc    
            지역 설정 파일

+ node.js가 기본 지원하는 CommonJS 방식의 module loading
    그래서 브라우저에서 이해하는데 어려움이 있어 브라우저의 ES6 모듈 기능을 위해 webpack 번들러 사용

 참조: https://poiemaweb.com/es6-babel-webpack-1


---

#### _[ webpack (dependency) ]_
| NPM >>> webpack webpack-cli webpack-dev-server
     트랜스파일링 및 번들링을 실행

    - babel_loader
        - Babel을 사용하여 ES6+ 코드를 ES5 코드로 트랜스파일링

    - ts-loader
        - 타입스크립트를 자바스크립트로 트랜스파일링

    - html-webpack-plugin
        - 빌드 결과를 자동 주입 (template)
        -  https://yamoo9.gitbook.io/webpack/webpack/webpack-plugins/automatic-injection-to-html-document
    - clean-webpack-plugin
        - 동일한 빌드 결과물 삭제

    - DefinePlugin
        - 프로젝트 내 전역변수 선언

    - webpack-dev-server
        - 웹팩 개발 가상 서버 (수정 사항 변경 시 자동 빌드되어 확인 가능)

---

#### _[ 타입스크립트 ]_
| npm >>> typescript tsc-watch ts-loader @types/react

    - tsc -- init
        tsconfig.json 생성 (타입스크립트 설정 파일)

    - tsc-watch
        ts 타입검사