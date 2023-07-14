import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';
import { increase, initPageNumber, PageState } from '@/store/issuePage';
import { startLoading, stopLoading } from '@/store/loading';
import { IissueData } from '@/types/dataType';

import useNavigateErrorPage from './useNavigateErrorPage';

function useInfinitiScroll(
  setDataState: React.Dispatch<React.SetStateAction<IissueData[]>>,
  // eslint-disable-next-line
  api: (pageNumber: PageState) => Promise<any>,
  // eslint-disable-next-line
  mutate?: (data: any) => any,
) {
  const pageState = useSelector((store: RootState) => store.page);
  const isLoadingState = useSelector((store: RootState) => store.isLoading);
  const dispatch = useDispatch();
  const goToErrorPage = useNavigateErrorPage();
  const pageStateRef = useRef(pageState);

  pageStateRef.current = pageState;
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            dispatch(startLoading());
            api(pageStateRef.current)
              .then((data) => {
                if (mutate) {
                  const mutateData = mutate(data);

                  setDataState((prevData) => [...prevData, ...mutateData]);
                } else {
                  setDataState((prevData) => [...prevData, ...data]);
                }
                dispatch(increase());
                dispatch(stopLoading());
              })
              .catch(() => goToErrorPage());
          }
        });
      },
      { threshold: 0.5 },
    ),
  );

  const observe = (element: HTMLElement) => {
    observer.current.observe(element);
    dispatch(initPageNumber());
  };

  return { observe, isLoadingState };
}
export default useInfinitiScroll;
