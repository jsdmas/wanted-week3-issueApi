import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import remarkGfm from 'remark-gfm';

import { useDetailDataStateContext } from '@/contexts/DetailData';
import timeHelper from '@/utils/timeHelper';

import * as S from './detailPage.style';

function DetailIssueField() {
  const detailDataState = useDetailDataStateContext();

  const content = detailDataState?.body ?? '';
  const [year, month, day] = timeHelper(detailDataState?.created_at);

  return (
    <>
      <S.Title>
        <S.UserImg src={detailDataState.user?.avatar_url} />
        <S.RightBox>
          <h3>
            #{detailDataState?.number} {detailDataState?.title}
          </h3>
          <span>
            작성자:&nbsp;{detailDataState?.user?.login},&nbsp;작성일:&nbsp;{year}년{month}월{day}일
          </span>
        </S.RightBox>
        <S.Comment>코멘트:{detailDataState?.comments}</S.Comment>
      </S.Title>
      <S.Content>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </S.Content>
    </>
  );
}

export default DetailIssueField;
