import React, { createContext, Dispatch, useContext, useState } from 'react';

import { DetailDataType } from '@/types/detailDataType';

const DetailDataStateContext = createContext<DetailDataType[] | null>(null);
const SetDetailDataStateContext = createContext<Dispatch<React.SetStateAction<DetailDataType[]>> | null>(
  null,
);

export function DetailDataProvider({ children }: { children: React.ReactNode }) {
  const [detailData, setDetailData] = useState<DetailDataType[]>([]);

  return (
    <DetailDataStateContext.Provider value={detailData}>
      <SetDetailDataStateContext.Provider value={setDetailData}>
        {children}
      </SetDetailDataStateContext.Provider>
    </DetailDataStateContext.Provider>
  );
}
export function useDataStateContext() {
  const context = useContext(DetailDataStateContext);

  if (context === null) {
    throw new Error('Cannot find <DetailDataStateContext.Provider>');
  }

  return context;
}

export function useSetDataStateContext() {
  const context = useContext(SetDetailDataStateContext);

  if (context === null) {
    throw new Error('Cannot find <SetDataStateContext.Provider>');
  }

  return context;
}
