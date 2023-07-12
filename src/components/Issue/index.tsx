import { Iissue } from 'src/types/dataType';

function Issue({ title }: Iissue) {
  return <li>{title}</li>;
}
export default Issue;
