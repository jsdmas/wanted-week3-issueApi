import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import remarkGfm from 'remark-gfm';

import { getDetailIssue } from '@/apis/githubIssue';
import Header from '@/components/Header/Header';
import Layout from '@/components/Layout';
import { DetailDataType } from '@/types/detailDataType';
import timeHelper from '@/utils/timeHelper';

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
  console.log(data);
  const content = data?.body ?? '';

  return (
    <Layout header={<Header owner="facebook" repo="react" />}>
      <Title>
        <UserImg src={data?.user.avatar_url} />
        <RightBox>
          <h3>
            #{data?.number} {data?.title}
          </h3>
          <span>
            작성자:&nbsp;{data?.user?.login},&nbsp;작성일:&nbsp;{year}년{month}월{day}일
          </span>
        </RightBox>
        <Comment>코멘트:{data?.comments}</Comment>
      </Title>

      <Content>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </Content>
    </Layout>
  );
}
const Content = styled.section``;
const Title = styled.div`
  min-height: 60px;
  margin-bottom: 5px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 0.2fr 0.6fr 0.2fr;
  gap: 15px;
`;
const RightBox = styled.div`
  display: grid;
  place-items: center left;
  grid-template-rows: 1fr 1fr;
  row-gap: 5px;
  padding-bottom: 10px;

  h3 {
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 18px;
  }
  span {
    font-size: small;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const Comment = styled.span`
  display: grid;
  font-size: smaller;
  white-space: nowrap;
  place-items: center right;
`;
const UserImg = styled.img`
  width: 100%;
  height: 100%;
`;

export default IssuePage;
