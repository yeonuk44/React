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
(after Next.js 11 update) yarn add react react-dom next sass axios <br>
yarn add --dev webpack

## Set
- create package.json <br>
yarn init -y

## Test
- client 내 index.js 파일이 있을 경우 <br>
yarn run client

## Issue
- node.js version up <br>
상위 버전을 설치하였음에도 active에는 기존의 버전이 그대로 남아있고, n 명령어로 변경 안될 경우 node info를 확인한 뒤 <br>
명령어 : ln -sf installed경로 active경로 <br>
- next.js webpack version @5 <br>
next.js에서 webpack @5는 stable이 떨어진다는 이슈로 인해 @4 사용 <br>
- next는 pages 폴더와 index.js 파일이 반드시 포함되어야 한다. <br>
- yarn install 관련 이슈 <br>
Error: yarn not installed 와 같은 메시지가 떴을 때, sudo npm install --global yarn 권한 설치를 진행해줘야 함.
