import { PATH } from 'src/constants/path';
import { IissueData } from 'src/types/dataType';

import timeHelper from '@/utils/timeHelper';

import * as S from './issue.stye';

function Issue(props: IissueData) {
  const [year, month, day] = timeHelper(props.created_at);

  return (
    <>
      {!props.ad?.isAd ? (
        <S.LinkStyle to={`${PATH.ISSUE}/${props.number}`}>
          <S.Item>
            <S.LeftBox>
              <h3>
                #{props.number} {props.title}
              </h3>
              <span>
                작성자:&nbsp;{props.user?.login},&nbsp;작성일:&nbsp;{year}년{month}월{day}일
              </span>
            </S.LeftBox>
            <S.Comment>코멘트:{props.comments}</S.Comment>
          </S.Item>
        </S.LinkStyle>
      ) : (
        <S.LinkStyle to={props.ad?.link as string}>
          <S.AdItem>
            <img src={props.ad?.image} alt={props.ad?.alt} />
          </S.AdItem>
        </S.LinkStyle>
      )}
    </>
  );
}

export default Issue;
