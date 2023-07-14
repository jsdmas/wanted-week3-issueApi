import { useNavigate } from 'react-router-dom';

import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { PATH } from '@/constants/path';

function useNavigateErrorPage() {
  const navigate = useNavigate();
  const goToErrorPage = () => {
    navigate(PATH.ERROR_PAGE);
    alert(ERROR_MESSAGE.FAIL_GET_DATA);
  };

  return goToErrorPage;
}

export default useNavigateErrorPage;
