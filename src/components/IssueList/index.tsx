import React from 'react';

type OwnProps<T> = {
  items: T[];
  children?: (item: T) => React.ReactNode;
};
function IssueList<T>({ children, items }: OwnProps<T>) {
  return <ul>{items.map((item) => children?.(item))}</ul>;
}
export default IssueList;
