import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

import { getDetailIssue } from '@/apis/githubIssue';
import Header from '@/components/Header/Header';
import Layout from '@/components/Layout';
import { DetailDataType } from '@/types/detailDataType';
import timeHelper from '@/utils/timeHelper';

import * as S from './issuePage.style';

function IssuePage() {
  const { id } = useParams();
  const [data, setData] = useState<DetailDataType | null>(null);

  const [year, month, day] = timeHelper(data?.created_at);

  useEffect(() => {
    const foo = async () => {
      const myData = await getDetailIssue(id);

      setData(myData);
    };

    foo();
  }, []);

  const content = data?.body ?? '';

  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <S.Title>
        <S.UserImg src={data?.user.avatar_url} />
        <S.RightBox>
          <h3>
            #{data?.number} {data?.title}
          </h3>
          <span>
            작성자:&nbsp;{data?.user?.login},&nbsp;작성일:&nbsp;{year}년{month}월{day}일
          </span>
        </S.RightBox>
        <S.Comment>코멘트:{data?.comments}</S.Comment>
      </S.Title>

      <S.Content>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </S.Content>
    </Layout>
  );
}

export default IssuePage;
