import { Link } from 'react-router-dom';

import { PATH } from '@/constants/path';

function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      NotFound
      <br />
      <br />
      <br />
      <Link to={PATH.HOME} style={{ color: 'blue' }}>
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
