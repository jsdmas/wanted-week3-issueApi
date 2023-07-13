const LOADING = 'loader/LOADING' as const;

export const discriminationLoading = () => ({
  type: LOADING,
});

type LoadingAction = ReturnType<typeof discriminationLoading>;

export type LoadingState = { isLoading: boolean };

const initalState: LoadingState = { isLoading: true };

export default function loadDiscriminationReducer(
  state: LoadingState = initalState,
  action: LoadingAction,
): LoadingState {
  switch (action.type) {
    case 'loader/LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
