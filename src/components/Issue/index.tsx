import { Iissue } from 'src/types/dataType';

import * as S from './issue.stye';

function Issue({ title, number, created_at, comments, user: { login }, url }: Iissue) {
  const time = {
    year: created_at.slice(0, 4),
    month: created_at.slice(5, 7),
    day: created_at.slice(8, 10),
  };

  return (
    <S.LinkStyle to={url}>
      <S.Item>
        <S.LeftBox>
          <h3>
            #{number} {title}
          </h3>
          <span>
            작성자:&nbsp;{login},&nbsp;작성일:&nbsp;{time.year}년{time.month}월{time.day}일
          </span>
        </S.LeftBox>
        <S.Comment>코멘트:{comments}</S.Comment>
      </S.Item>
    </S.LinkStyle>
  );
}

export default Issue;
