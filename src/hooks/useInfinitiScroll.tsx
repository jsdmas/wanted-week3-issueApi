import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { increase, PageState } from '@/store/issuePage';
import { startLoading, stopLoading } from '@/store/loading';
import { IissueData } from '@/types/dataType';
import addAd from '@/utils/addAdHelper';

function useInfinitiScroll(
  setDataState: React.Dispatch<React.SetStateAction<IissueData[]>>,
  // eslint-disable-next-line
  api: (pageNumber: PageState) => Promise<any>,
) {
  const pageState = useSelector((store: RootState) => store.page);
  const isLoadingState = useSelector((store: RootState) => store.isLoading);
  const dispatch = useDispatch();

  const pageStateRef = useRef(pageState);

  pageStateRef.current = pageState;
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(startLoading());
            api(pageStateRef.current).then((data) => {
              // 광고 추가해서 가공 후 넣어주기
              const addAdData = addAd(data);

              setDataState((prevData) => [...prevData, ...addAdData]);
              dispatch(increase());
              dispatch(stopLoading());
            });
          }
        });
      },
      { threshold: 0.5 },
    ),
  );

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
  };

  return { observe, isLoadingState };
}
export default useInfinitiScroll;
