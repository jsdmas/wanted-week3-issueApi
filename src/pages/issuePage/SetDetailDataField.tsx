import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getDetailIssue } from '@/apis/githubIssue';
import Loader from '@/components/Loader';
import { useSetDetailDataStateContext } from '@/contexts/DetailData';
import useNavigateErrorPage from '@/hooks/useNavigateErrorPage';
import { RootState } from '@/store';
import { startLoading, stopLoading } from '@/store/loading';

import DetailIssueField from './DetailIssueField';

function SetDetailDataField() {
  const { id } = useParams();
  const setDetailDataState = useSetDetailDataStateContext();
  const goToErrorPage = useNavigateErrorPage();
  const loadingState = useSelector((store: RootState) => store.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startLoading());
    const foo = async () => {
      const myData = await getDetailIssue(id);

      setDetailDataState(myData);
    };

    foo()
      .then(() => dispatch(stopLoading()))
      .catch(() => goToErrorPage());
  }, []);

  return <>{loadingState.isLoading ? <Loader /> : <DetailIssueField />}</>;
}

export default SetDetailDataField;
