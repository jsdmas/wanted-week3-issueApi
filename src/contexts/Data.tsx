import React, { createContext, useContext, useState } from 'react';

import { Iissue } from '@/types/dataType';

const DataStateContext = createContext<Iissue[] | null>(null);
const SetDataStateContext = createContext<React.Dispatch<React.SetStateAction<Iissue[]>> | null>(
  null,
);

export function dataProvider({ childern }: { childern: React.ReactNode }) {
  const [data, setData] = useState<Iissue[]>([]);

  return (
    <DataStateContext.Provider value={data}>
      <SetDataStateContext.Provider value={setData}>{childern}</SetDataStateContext.Provider>
    </DataStateContext.Provider>
  );
}

export function useDataStateContext() {
  const context = useContext(DataStateContext);

  if (context === null) {
    throw new Error('Cannot find <DataStateContext.Provider>');
  }

  return context;
}

export function useSetDataStateContext() {
  const context = useContext(SetDataStateContext);

  if (context === null) {
    throw new Error('Cannot find <SetDataStateContext.Provider>');
  }

  return context;
}
