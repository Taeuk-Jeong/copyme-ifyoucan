# 🤸🏻‍♂️ COPY ME IF YOU CAN 🤸🏻

> ### '**Copy me if you can**'은 서로의 동작을 따라하는 동작인식기반 화상 웹게임 입니다.

- #### 상대방의 동작을 정확히 따라할수록 높은 유사도 점수를 받습니다.
- #### 서로의 포즈 공격에 대해 더 높은 유사도 점수를 획득한 사람이 승리합니다.

<br>

## **🗓️ 프로젝트 기간**

> ### 2023.02.02 ~ 2023.03.11

<br>

## **🔗 바로가기**

- ### 서비스: [Copy Me If You Can][servicelink]
- ### 발표 영상: [Youtube][youtubelink]

[servicelink]: https://copyme-ifyoucan.com/
[youtubelink]: https://youtu.be/Duiv82ARhL4

<br>

## **👨‍👨‍👦‍👦 팀원 소개**

| 이름   | 역할                                                        |
| ------ | ----------------------------------------------------------- |
| 김태준 | 개발환경 구축 및 배포, webRTC, socket 통신, 베스트샷        |
| 박주환 | 로그인/회원가입, 채팅, 최고의 플레이, DB 관리               |
| 정태욱 | UI/UX, 자세 추정 모델 적용, 게임 이벤트 관리                |
| 조제희 | 동작 유사도 계산, 게임 모드, 모션 인식(준비/시작, 튜토리얼) |

<br>

## **📜 포스터**
![카피미이프유캔_포스터-1 2](https://user-images.githubusercontent.com/116482273/224615666-a49f4654-739c-4e84-9bbf-131912368a15.png)

<br>

---

<br>

## **실행방법 (dev)**

> ### root 디렉토리에서 설정된 script를 실행합니다 (package.json에 작성되어있음)

```bash
$ yarn client:start
$ yarn server:dev
```

<br>

## **개발환경 셋팅**

```bash
# git clone
$ git clone https://github.com/krafton-jungle-project/copyme-ifyoucan.git

# install yarn
$ brew install yarn

# install nvm
$ brew install nvm
$ nvm install 16.19.0
$ nvm use 16.19.0
```
