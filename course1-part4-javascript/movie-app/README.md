## VanillaJS Movie App
---
OMDb API를 활용하여 VanillaJS 영화 검색 애플리케이션을 만든다.
<br/>
해당 프로젝트는 JS버전과 TS버전으로 나뉘어져 있다.
<br/>
사이트를 컴포넌트(Component) 단위로 개발할 예정이다.
<br/>
<br/>
```
npm init -y
npm i parcel -D
```
위의 명령어로 개발을 시작한다. 그리고 package.json 파일을 연 후, "script"의 "test" 부분을 아래와 같이 바꾸어 준다. 이는 개발 서버를 오픈하기 위함이다. 그리고 배포할 수 있는 빌드 결과를 위해 한 줄 더 추가해준다.
```
"script" : {
    "dev" : "parcel ./index.html",
    "build" : "parcel build ./index.html"
}
```
