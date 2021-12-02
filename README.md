# React
React practice & environment 

## Requirement
- React
- React-dom
- sass
- axios
- webpack(version : @4)
- 
### Dependency install
(2021-12-02 pixed, Next.js 11 Update) yarn add react react-dom next node-sass @zeit/next-sass axios <br>
(after Next.js 11 update) yarn add react react-dom next sass axios 
yarn add --dev webpack@4

## Set
- create package.json
yarn init -y

## Test
- client 내 index.js 파일이 있을 경우
yarn run client

## Issue
- node.js version up
상위 버전을 설치하였음에도 active에는 기존의 버전이 그대로 남아있을 경우 n으로 node info를 확인한 뒤
ln -sf installed경로 active경로
- next.js webpack version @5
next.js에서 webpack @5는 stable이 떨어진다는 이슈로 인해 @4 사용
- next는 pages 폴더와 index.js 파일이 반드시 포함되어야 한다.
