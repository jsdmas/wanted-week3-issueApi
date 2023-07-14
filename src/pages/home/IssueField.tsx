import Issue from 'src/components/Issue';

import IssueList from '@/components/IssueList';
import { useDataStateContext } from '@/contexts/Data';
import { IissueData } from '@/types/dataType';

function IssueField() {
  const datastate = useDataStateContext();

  return (
    <IssueList items={datastate}>
      {(item: IissueData) => <Issue key={item.id} {...item} />}
    </IssueList>
  );
}

export default IssueField;
