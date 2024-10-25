## 🗂️주요 폴더 및 파일 설명
1. `src/assets/`: 이미지, 폰트 등의 정적 파일
2. `src/components/`: 재사용 가능한 React 컴포넌트
3. `src/hooks/`: 커스텀 React 훅
4. `src/pages/`: 각 라우트에 해당하는 페이지 컴포넌트
5. `src/services/`: API 호출 및 외부 서비스 관련 로직
6. `src/stores/`: 상태 관리 (예: Redux, Zustand)
7. `src/styles/`: 전역 스타일 및 스타일 유틸리티
8. `src/types/`: TypeScript 타입 정의
9. `src/utils/`: 유틸리티 함수 및 헬퍼

## 🖊️폴더 네이밍 컨벤션

1. 일반적인 구조
    ```
    src/
    ├── assets/         (소문자)
    ├── components/     (소문자)
    ├── hooks/          (소문자)
    ├── utils/          (소문자)
    ├── pages/          (소문자)
    ├── services/       (소문자)
    └── types/          (소문자)
    ```

2. 기능/특징 기반 폴더
    ```
    - features/  (소문자)
    ├── auth/   (소문자)
    ├── blog/   (소문자)
    └── shop/   (소문자)
    ```

3. 컴포넌트 폴더
    ```
    - components/  (소문자)
    ├── Button/  (대문자)
    ├── Header/  (대문자)
    └── Layout/  (대문자)
    ```

<strong>주요 규칙</strong>
1. 최상위 구조 폴더는 소문자 사용
2. React 컴포넌트를 직접 담고 있는 폴더는 대문자
3. 유틸리티, 설정 등의 폴더는 소문자

<strong>예시</strong>

    src/
    ├── components/          # 순수 재사용 컴포넌트
    │   ├── Button/
    │   ├── Input/
    │   └── Card/
    │
    ├── containers/          # 재사용 컴포넌트 조합
    │   ├── Header/
    │   └── Footer/
    │
    ├── features/           # 기능별 구분
    │   ├── auth/
    │   │   ├── components/
    │   │   └── containers/
    │   └── shop/
    │       ├── components/
    │       └── containers/
    │
    ├── layouts/           # 레이아웃
    │   └── MainLayout/
    │
    └── pages/            # 페이지
        ├── Home/
        └── About/
    

<strong>실제 사용예시</strong>
##### 재사용 가능한 기본 컴포넌트
```
components/
├── Button/
└── Input/
```
##### 조합된 컴포넌트
```
containers/
└── SearchBar/        # Button과 Input을 조합
    ├── SearchBar.tsx
    └── index.ts
```
<strong>features 하위 폴더</strong>
```
features/
└── products/
    └── components/
        └── ProductSearch/  # SearchBar를 사용
```


```
features/
└── auth/                      # 인증 기능
    ├── components/            # 해당 기능에서만 사용되는 작은 단위 컴포넌트
    │   ├── LoginInput/
    │   ├── PasswordField/
    │   └── RememberMeCheckbox/
    │
    ├── containers/            # 해당 기능의 components들을 조합한 큰 단위
    │   ├── LoginForm/
    │   ├── SignupForm/
    │   └── ForgotPasswordForm/
```


<strong>실제 사용예시</strong>
##### 1. 상품(products) 기능
```
features/
└── products/
    ├── components/           # 작은 단위
    │   ├── ProductImage/     # 상품 이미지 표시 컴포넌트
    │   ├── PriceTag/        # 가격 표시 컴포넌트
    │   └── RatingStars/     # 별점 표시 컴포넌트
    │
    └── containers/          # 큰 단위
        ├── ProductCard/     # 위 컴포넌트들을 조합한 상품 카드
        └── ProductList/     # ProductCard들을 모아서 보여주는 컨테이너
```

##### 2. 장바구니(cart) 기능
```
features/
└── cart/
    ├── components/          # 작은 단위
    │   ├── QuantityInput/  # 수량 입력 컴포넌트
    │   ├── CartItemPrice/  # 개별 가격 표시
    │   └── RemoveButton/   # 삭제 버튼
    │
    └── containers/         # 큰 단위
        ├── CartItem/      # 위 컴포넌트들을 조합한 장바구니 아이템
        └── CartSummary/   # 전체 합계, 할인 등을 보여주는 컨테이너
```

##### 3. 게시판(board) 기능
```
features/
└── board/
    ├── components/         # 작은 단위
    │   ├── PostTitle/     # 게시글 제목 컴포넌트
    │   ├── CommentInput/  # 댓글 입력 컴포넌트
    │   └── LikeButton/    # 좋아요 버튼
    │
    └── containers/        # 큰 단위
        ├── PostCard/      # 게시글 카드 (제목 + 내용 + 버튼들)
        ├── CommentList/   # 댓글 목록
        └── PostEditor/    # 게시글 작성/수정 폼
```

##### 주요 차이점
1. components/
   - 단일 책임을 가진 작은 컴포넌트
   - 독립적으로 동작 가능
   - 상태 관리가 거의 없거나 단순함
   - 재사용성이 높음

2. containers/
   - 여러 컴포넌트를 조합
   - 비즈니스 로직 포함
   - 상태 관리가 복잡할 수 있음
   - 해당 feature에 특화됨

팁
- components는 "어떻게 보여질까?"에 초점
- containers는 "어떻게 동작할까?"에 초점
- 너무 작은 단위로 쪼개는 것은 오히려 복잡도를 높일 수 있음
- feature 간에 공유되는 컴포넌트는 최상위 components/ 폴더로 이동



## 📚라이브러리
1. 상태관리: zustand
2. 라우팅: React Router
3. 스타일: Emotion
4. 페칭: tanstack query
5. 애니메이션: React Spring
6. 폼: React Hook Form


## ⌨️구현하고자 하는 기능
| 기능 | 작업예정 | 작업중 | 작업완료 | 작업일자 | 비고 |
|------|-----------|---------|------------|-----------|------|
| 무한 스크롤 (Infinite Scroll) | ▣ | ▢ | ▢ | | |
| 페이지네이션 (Pagination) | ▣ | ▢ | ▢ | | |
| 모달 / 다이얼로그 (Modal / Dialog) | ▣ | ▢ | ▢ | | |
| 토스트 알림 (Toast Notifications) | ▣ | ▢ | ▢ | | |
| 드래그 앤 드롭 (Drag and Drop) | ▣ | ▢ | ▢ | | |
| 자동 완성 (Autocomplete) | ▣ | ▢ | ▢ | | |
| 폼 유효성 검사 (Form Validation) | ▣ | ▢ | ▢ | | |
| 다크 모드 / 테마 전환 (Dark Mode / Theme Switching) | ▢ | ▢ | ▣ | | |
| 반응형 레이아웃 (Responsive Layout) | ▣ | ▢ | ▢ | | |
| 데이터 캐싱 (Data Caching) | ▣ | ▢ | ▢ | | |
| 지연 로딩 (Lazy Loading) | ▣ | ▢ | ▢ | | |
| 상태 관리 (State Management) | ▣ | ▢ | ▢ | | |
| 에러 바운더리 (Error Boundaries) | ▣ | ▢ | ▢ | | |
| 국제화 (Internationalization, i18n) | ▣ | ▢ | ▢ | | |
| 접근성 (Accessibility, a11y) | ▣ | ▢ | ▢ | | |
| 데이터 그리드 (Data Grid) | ▣ | ▢ | ▢ | | |

## Emotion 선택 이유
1. 동적 스타일링이 쉬움
// props 기반 스타일링
    ```
    const Button = styled.button<{ primary?: boolean }>`
    color: ${props => props.primary ? 'blue' : 'gray'};
    `
    ```
2. CSS-in-JS로 스코프 충돌 없음
    ```
    const Title = styled.h1`
    color: blue;  // 다른 h1에 영향 없음
    `
    ```
3. JavaScript 변수/함수 활용 가능
    ```
    const theme = {
    primary: 'blue',
    secondary: 'gray'
    };
    const Button = styled.button`
    color: ${theme.primary};
    `
    ```
4. 컴포넌트 기반 스타일 재사용
    ```
    const BaseButton = styled.button`
    padding: 8px 16px;
    `;
    const PrimaryButton = styled(BaseButton)`
    background: blue;
    `;
    ```