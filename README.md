<h1 align="center">NoColored - Front-End</h1>
<img alt="게임 시작 화면" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/main/view/landing_fullScreen.png" width="100%" height="100%"/>

-----

## 📇목차
- [프로젝트 소개](#-프로젝트-소개)
- [기획 배경](#-기획-배경)
- [팀원 소개](#-팀원-소개)
- [Role](#-role)
- [기술 스택](#-기술-스택)
- [Front 구동 환경](#-front-구동-환경)
- [주요 기능 및 역할](#-주요-기능-및-역할)
- [폴더 구조 및 아키텍쳐 설계](#-폴더-구조-및-아키텍쳐-설계)

---

## 🍀 프로젝트 소개
<br>

**숨바꼭질 대전 웹 게임 - NoColored**

#### main-service
- **숨바꼭질 대전 웹 게임**
- NoColored는 2~4인 경쟁 기반 2D 캐쥬얼 게임입니다.
- NPC 사이 숨은 플레이어를 찾아 점수를 획득하는 방식의 게임입니다.
- 경쟁전을 통해 유사한 성적의 플레이어들과 대전을 펼칠 수 있습니다.
- 비공개/공개방을 생성하여 친선전 플레이가 가능합니다.

#### sub-service

- 게임의 진행상황을 통해 스킨, 칭호, 업적 보상을 얻을 수 있습니다.
- 전체 플레이어의 랭킹을 제공하여 자신의 티어와 점수를 확인할 수 있습니다.

<p style="font-size: 0.8em; text-align: right">
  <a href="https://github.com/NoColored/.github/wiki/%F0%9F%8C%9E%EA%B8%B0%ED%9A%8D-%EB%B0%B0%EA%B2%BD"><b>기획 배경 바로 가기</b></a>
</p>


**서비스 주요 과제**
- 웹소켓을 활용한 React  - Phaser3 연결의 동시성 처리
- 공통 컴포넌트 디자인을 기반으로 한 깔끔한 UI
- 사용자가 게임에 빠르게 접근하고, 직관적으로 적응할 수 있도록 한 UX
-----


## 💁 팀원 소개
|            👑[이담비](https://github.com/damdam6)             |           🍪[김세진](https://github.com/nijesmik)            |             🎰[박은수](https://github.com/Gardener-soul)             |            💟[전민정](https://github.com/dolmeengii)             |                            
|:----------------------------------------------------------:|:---------------------------------------------------------:|:-----------------------------------------------------------------:|:-------------------------------------------------------------:|
| <img alt="이담비" src="https://github.com/damdam6.png" width="230" height="100%"/> | <img alt="김세진" src="https://github.com/nijesmik.png" width="230" height="100%" /> | <img alt="gardener" src="https://github.com/Gardener-soul.png" width="230" height="100%"/> | <img alt="oree" src="https://github.com/dolmeengii.png" width="230" height="100%" /> |
## 👨‍👩‍👧‍👦Role
**이담비**
- Team Leader
- npm + vite 기반 프론트 환경 구축
- 프론트 코딩 컨벤션 설정
- 전체 Assets 제작 및 수정
- 공통 컴포넌트 제작
- 메인 페이지 제작
- Phaser3를 활용한 게임 전체 구현
- 코드 리뷰를 통한 피드백 제공
- 중간/최종 발표 PPT 제작
- UCC 감독
- 최종 발표

**김세진**
- Front Leader
- 피그마 디자인
- 공통 axios api 제작
- 공통 컴포넌트 제작
- 전체 프레임 및 대기실 페이지 제작
- axios 기반 백엔드 데이터 연결
- User 상태 관리
- 최종 발표 PPT 제작
- 코드 리뷰를 통한 피드백 제공

**전민정**
- 서기
- 피그마 디자인
- 회의 내용 필기하여 노션에 기록
- 공통 컴포넌트 제작
- 랜딩, 랭킹 페이지 제작
- 대기실 및 결과창 페이지 제작
- 웹 소켓, Axios 기반 API 연결
- 토큰을 기반으로 한 라우터 보안 관리
- 코드 리뷰를 통한 피드백 제공
- 최종 발표 UCC 촬영 및 제작

**박은수**
- 기획 및 정책 담당
- 피그마 디자인
- 요구사항 정의서 및 기능 명세서 작성
- 세계관, 아이템, 수집 요소, 경험치에 대한 정책 수립
- 공통 컴포넌트 제작
- 회원 기능 , 게임 정보 , 환경설정, Collection 페이지 제작
- Axios 기반 API 연결
- Collection, Music 상태관리
- 코드 리뷰를 통한 피드백 제공
- UCC 출연
- 중간 발표
- ReadMe 파일 작성

-----

## 🛠️ 기술 스택

<div style="border: 1px solid #ddd; padding: 20px; border-radius: 10px; background-color: #f9f9f9;">
  <ul>
    <li style="color: #000; font-weight: bold;">React + Vite</li>
    <li style="color: #000; font-weight: bold;">Game: Phaser3</li>
    <li style="color: #000; font-weight: bold;">Language: TypeScript</li>
    <li style="color: #000; font-weight: bold;">State: Zustand</li>
    <li style="color: #000; font-weight: bold;">Styling: Vanilla Extract</li>
  </ul>
</div>


- Phaser3
    - 웹 상에서의 뛰어난 랜더링 성능과 게임 개발 도구를 제공.
    - 세밀한 애니메이션 제어, 물리엔진 통합, 다양한 Interactive Library 를 제공
- Web-Socket
    - 브라우저와 서버간 실시간 데이터 전송을 제공.
    - 낮은 지연시간 통신을 통해 실시간 게임 상태를 동기화하고 멀티플레이 세션을 관리함.
- Vanilla-Extract-Css
    - Compile 과정에서 CSS 모듈을 생성 - Zero-Runtime 접근 방식으로 빠르게 실행 가능
    - TypeScript 와의 연계로 스타일시트에 대한 타입 안정성과 코드 자동 완성 기능을 제공
- Zustand
    - React-Component가 아닌 게임 환경에서도, 상태 관리를 통해 Web-Socket 및 정보를 불러올 수 있어서 선택

-----

## 🏃 Front 구동 환경

```
// 패키지 라이브러리 설치
npm install

// 개발 환경 실행
npm run dev

// 빌드 파일 생성
npm run bulid
```
- front-domain : https://nocolored.world

-----
## ⚙️ 주요 기능 및 역할

### 🖥️ 랜딩 페이지 - `전민정`
|첫 화면|
|:--:|
|<img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/main/view/home.gif" width="100%" height="100%" > |

### 🏠 메인 페이지 - `이담비`
|                                         메인 (게스트)                                          |                                         메인 (회원)                                          |
|:-----------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------:|
| <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/main_guest.png" width="100%" height="100%" > | <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/main_user.png" width="100%" height="100%" > |

### 🗃️ 컬렉션 페이지 - `박은수`
|                                               스킨                                               |                                               칭호                                                |                                                  업적                                                   |
|:----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|
| <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/collection_skin.gif" width="100%" height="100%" > | <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/collection_label.gif" width="100%" height="100%" > | <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/collection_achievement.gif" width="100%" height="100%" > |

### 🥇 랭킹 페이지 - `전민정`, `이담비`
|                                      랭킹 조회 화면                                       |
|:-----------------------------------------------------------------------------------:|
| <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/rank.gif" width="100%" height="100%" > |   


### 🎮 친선전, 대기실 페이지 - `김세진`, `이담비`

<table>
  <tr>
    <td align="center"><b>친선전 - 대기실 리스트</b></td>
    <td colspan="2" align="center"><b>친선전 - 모드 선택</b></td>
  </tr>
  <tr>
    <td align="center">
      <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/friend_lobby.gif" style="width: 100%; height: auto;">
    </td>
    <td colspan="2" align="center">
      <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/friend_makeroom.gif" style="width: 100%; height: auto;">
    </td>
  </tr>
  <tr>
    <td colspan="3" align="center"><b>친선전 - 대기실</b></td>
  </tr>
  <tr>
    <td colspan="3" align="center">
      <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/friend_matching_edit.gif" style="width: 100%; height: auto;">
    </td>
  </tr>
</table>



### 🎮 게임 진입, 결과 페이지 - `김세진`, `이담비`, `전민정`
|                                        경쟁전 매칭, 게임 로딩                                         |                                           게임 결과 화면                                           |
|:--------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------------------------:|
| <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/rank_matching.gif" width="100%" height="100%" > |  <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/game_result.gif" width="100%" height="100%" >  |

### 🎮 게임 플레이 - `이담비`
| 게임 화면 |
|:-----:|
|   <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/basic_play.gif" width="100%" height="100%" >    |

### ⚙️ 환경설정, 정보 - `박은수`
|                                         플레이 가이드                                         |                                         아이템 및 티어 가이드                                          |
|:------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------:|
|  <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/game_info.gif" width="100%" height="100%" >  | <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/info_item_tier.gif" width="100%" height="100%" > |
|                                          게스트 회원전환                                          |                                             환경 설정                                             |
| <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/guestSignIn.gif" width="100%" height="100%" > |  <img alt="메인" src="https://github.com/NoColored/.github/blob/main/profile/docs/images/frontend/view/user_setting.gif" width="100%" height="100%" >  |


---
## 📂 폴더 구조 및 아키텍쳐 설계 - `김세진`, `이담비`
```
.
├── node_modules
├── public
|   ├── fonts
|   ├── images
|   └── music
└── src
    ├── app
    ├── components
    ├── constants
    ├── containers
    ├── hooks
    ├── services
    ├── states
    ├── styles
    ├── types
    └── utils
```
