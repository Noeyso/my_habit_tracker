# My-Habit-Tracker

습관을 기록하고 체크할 수 있는 습관 관리 사이트입니다.

## 사이트 주소

https://noeyso.github.io/my_habit_tracker/

## 서론

> 처음에는 우리가 습관을 만들지만 <br /> 그 다음에는 습관이 우리를 만든다. <br /> \_존 드라이든

habit tracker는 하루의 작은 습관들을 기록하고 체크해 나갈 수 있는 사이트입니다.

기존에 작성했던 habit tracker의 디자인과 기능을 수정했고, redux를 사용해서 습관을 관리할 수 있도록 변경했습니다.
![프로젝트 수정 비교](https://user-images.githubusercontent.com/48446896/182156090-f3c1290d-580c-4d03-b9d6-da47d8c3e924.png)

## 프로젝트 구조

```bash
.
├── common 
│   └── font  
├── components
│   ├── asideContent
│   ├── customCheckbox
│   ├── form
│   │   ├── habitAddForm
│   │   └── habitDeleteForm
│   ├── habitStatus
│   ├── habitTable
│   ├── habits
│   └── header
└── modules
    └── habit
        ├── actions.ts
        ├── reducer.ts
        └── types.ts
```

- common : 폰트, 색상(color.css) 등 공통으로 사용되는 resource
- components : 페이지를 구성하는 컴포넌트들
- modules : 데이터,데이터를 관리하는 파일들 (redux 관련 내용을 담고있습니다.)
<br />
<br />

프로젝트 UI를 다음과 같이 컴포넌트로 구조화할 수 있습니다.
<img width="700" alt="메인화면" src="https://user-images.githubusercontent.com/48446896/182159188-617cc477-ceee-4dc1-beb8-7580117ae81e.png">

<br />

## 프로젝트 설명

<img width="700" alt="메인화면" src="https://user-images.githubusercontent.com/48446896/182160683-3ce5750f-90e2-47ff-a94a-b55a25416457.png">
<br />
(메인 화면)

1. 테이블의 체크박스 또는 오른쪽의 "달성 완료!" 버튼을 사용해서 습관 상태를 변경할 수 있습니다.
2. progress bar를 통해 일주일 동안의 습관 달성률을 확인할 수 있습니다.
3. 오른쪽 사이드의 콘텐츠를 통해 오늘의 습관 상태를 확인할 수 있습니다. (습관 완료 시 습관 아이템이 색으로 채워집니다.)
4. 습관추가 버튼을 통해 습관을 추가할 수 있습니다.

<img width="700" alt="습관추가" src="https://user-images.githubusercontent.com/48446896/182161092-c289266b-613a-4570-a8d9-fb1d17be90f0.png">
<br />
(습관 추가 폼)

6. 습관의 이름과 색상을 설정할 수 있습니다. 색상은 랜덤으로 설정되며, 재설정 버튼을 통해 랜덤으로 색상을 변경할 수 있습니다.
   (습관 이름을 설정하지 않으면 습관을 추가할 수 없습니다.)

<img width="700" alt="습관삭제" src="https://user-images.githubusercontent.com/48446896/182161634-24454604-4220-4c4d-9d21-3608677b2c55.png">
<br />
(습관 삭제 폼)

7. 오른쪽 사이드의 습관 목록에서 휴지통 버튼을 눌러서 습관을 삭제할 수 있습니다.
