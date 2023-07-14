import { useEffect, useRef } from 'react';

import { getGithubIssue } from '@/apis/githubIssue';
import Loader from '@/components/Loader';
import { useSetDataStateContext } from '@/contexts/Data';
import useInfinitiScroll from '@/hooks/useInfinitiScroll';

function Observer() {
  const setDataState = useSetDataStateContext();

  const observerDiv = useRef<HTMLDivElement>(null);
  const {
    observe,
    isLoadingState: { isLoading },
  } = useInfinitiScroll(setDataState, getGithubIssue);

  useEffect(() => {
    if (observerDiv.current) observe(observerDiv.current);
  }, [observe]);

  return (
    <>
      {isLoading ? <Loader /> : null}
      <div style={{ height: '5vh', width: '100%' }} ref={observerDiv} />
    </>
  );
}
export default Observer;
