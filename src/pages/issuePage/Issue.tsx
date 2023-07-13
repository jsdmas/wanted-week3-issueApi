import { useParams } from 'react-router-dom';

function IssuePage() {
  const params = useParams();

  console.log(params);

  return <div>Issue</div>;
}

export default IssuePage;
