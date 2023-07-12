import styled from '@emotion/styled';

export const Item = styled.li`
  min-height: 60px;
  margin-bottom: 5px;
  border-bottom: 1px solid black;
  display: grid;
  grid-template-columns: 0.8fr 0.2fr;
`;

export const LeftBox = styled.div`
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

export const Comment = styled.span`
  display: grid;
  font-size: smaller;
  white-space: nowrap;
  place-items: center right;
`;
