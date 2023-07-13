import { PATH } from 'src/constants/path';
import { IissueData } from 'src/types/dataType';

import timeHelper from '@/utils/timeHelper';

import * as S from './issue.stye';

function Issue({ title, number, created_at, comments, user: { login } }: IissueData) {
  const [year, month, day] = timeHelper(created_at);

  return (
    <S.LinkStyle to={`${PATH.ISSUE}/${number}`}>
      <S.Item>
        <S.LeftBox>
          <h3>
            #{number} {title}
          </h3>
          <span>
            작성자:&nbsp;{login},&nbsp;작성일:&nbsp;{year}년{month}월{day}일
          </span>
        </S.LeftBox>
        <S.Comment>코멘트:{comments}</S.Comment>
      </S.Item>
    </S.LinkStyle>
  );
}

export default Issue;
