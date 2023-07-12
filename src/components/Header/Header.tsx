import styled from '@emotion/styled';

type Props = {
  owner: string;
  repo: string;
};

function Header({ owner, repo }: Props) {
  return (
    <Title>
      <h1>
        {owner} / {repo}
      </h1>
    </Title>
  );
}

const Title = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 10%;
  h1 {
    font-size: 2.125rem;
    color: rgba(0, 0, 0, 0.7);
  }
  margin-bottom: 30px;
`;

export default Header;
