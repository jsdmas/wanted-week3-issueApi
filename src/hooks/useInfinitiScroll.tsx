import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { PATH } from '@/constants/path';
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
  const navigate = useNavigate();

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
                const addAdData = addAd(data);

                setDataState((prevData) => [...prevData, ...addAdData]);
                dispatch(increase());
                dispatch(stopLoading());
              })
              .catch((err) => {
                navigate(PATH.ERROR_PAGE);
                alert(err);
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
