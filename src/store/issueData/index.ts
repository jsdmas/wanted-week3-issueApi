/*
데이터 스크롤시 기존 데이터 유지못하는 현상 --> redux 상태를 만들어 고쳐야함
*/

import { IissueData } from '@/types/dataType';

const ISSUEDATA = 'issue/DATA' as const;

// 액션 함수
export const setData = (newData: IissueData[]) => ({
  type: ISSUEDATA,
  payload: newData,
});

// 액션 객체 타입
type DataAction = ReturnType<typeof setData>;
// 이 리덕스 모듈에서 관리할 타입 정의
export type DataState = { data: IissueData[] };
// 초기상태 선언
const initalState: DataState = { data: [] };

export default function issueDataReducer(
  state: DataState = initalState,
  action: DataAction,
): DataState {
  switch (action.type) {
    case 'issue/DATA':
      return {
        ...state,
        data: [...state.data, ...action.payload],
      };
    default:
      return state;
  }
}
