// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'counter/INCREASE' 와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREMENT = 'page/INCREMENT' as const;
const INIT = 'page/INIT' as const;

// 액션 함수
export const increase = () => ({
  type: INCREMENT,
});

export const initPageNumber = () => ({
  type: INIT,
});

// 액션 객체 타입
type PageAction = ReturnType<typeof increase | typeof initPageNumber>;
// 이 리덕스 모듈에서 관리할 타입 정의
export type PageState = { page: number };
// 초기상태 선언
const initalState: PageState = { page: 1 };

export default function issuePageReducer(
  state: PageState = initalState,
  action: PageAction,
): PageState {
  switch (action.type) {
    case 'page/INCREMENT':
      return { ...state, page: state.page + 1 };
    case 'page/INIT':
      return { ...state, page: 1 };
    default:
      return state;
  }
}
