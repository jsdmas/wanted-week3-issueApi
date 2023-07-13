import { useEffect, useRef } from 'react';

import { useSetDataStateContext } from '@/contexts/Data';
import useInfinitiScroll from '@/hooks/useInfinitiScroll';

function Observer() {
  const setDataState = useSetDataStateContext();

  const observerDiv = useRef<HTMLDivElement>(null);
  const observe = useInfinitiScroll(setDataState);

  useEffect(() => {
    if (observerDiv.current) observe(observerDiv.current);
  }, []);

  return <div style={{ height: '5vh', width: '100%' }} ref={observerDiv} />;
}
export default Observer;
