import styled from '@emotion/styled';

function Loader() {
  return <LoaderSpan></LoaderSpan>;
}

const LoaderSpan = styled.span`
  width: 48px;
  height: 48px;
  border: 5px solid black;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loader;
