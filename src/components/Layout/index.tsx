import React from 'react';

import * as S from './layout.style';

type Props = {
  header?: React.ReactNode;
  children?: React.ReactNode;
};

function Layout({ children, header }: Props) {
  return (
    <S.Wrapper>
      <S.BackGround>
        {header}
        {children}
      </S.BackGround>
    </S.Wrapper>
  );
}

export default Layout;
