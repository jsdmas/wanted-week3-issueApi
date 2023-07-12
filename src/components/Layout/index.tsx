import styled from '@emotion/styled';
import React from 'react';

type Props = {
  header?: React.ReactNode;
  children?: React.ReactNode;
};

function Layout({ children, header }: Props) {
  return (
    <BackGround>
      {header}
      {children}
    </BackGround>
  );
}
const BackGround = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
`;

export default Layout;
