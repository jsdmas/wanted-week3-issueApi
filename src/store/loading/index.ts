const START_LOADING = 'loading/START_LOADING' as const;
const STOP_LOADING = 'loading/STOP_LOADING' as const;

export const startLoading = () => ({
  type: START_LOADING,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

type LoadingAction = ReturnType<typeof startLoading | typeof stopLoading>;

export type LoadingState = { isLoading: boolean };

const initalState: LoadingState = { isLoading: false };

export default function loadDiscriminationReducer(
  state: LoadingState = initalState,
  action: LoadingAction,
): LoadingState {
  switch (action.type) {
    case 'loading/START_LOADING':
      return { ...state, isLoading: true };
    case 'loading/STOP_LOADING':
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
