import React, { createContext, Dispatch, useContext, useState } from 'react';

import { IissueData } from '@/types/dataType';

const DataStateContext = createContext<IissueData[] | null>(null);
const SetDataStateContext = createContext<Dispatch<React.SetStateAction<IissueData[]>> | null>(null);

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<IissueData[]>([]);

  return (
    <DataStateContext.Provider value={data}>
      <SetDataStateContext.Provider value={setData}>{children}</SetDataStateContext.Provider>
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
