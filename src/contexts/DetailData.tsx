import React, { createContext, Dispatch, useContext, useState } from 'react';

import { DetailDataType } from '@/types/detailDataType';

export type SetDetailDataState = Dispatch<React.SetStateAction<DetailDataType>> | null;

const DetailDataStateContext = createContext<Partial<DetailDataType | null>>(null);
const SetDetailDataStateContext = createContext<SetDetailDataState>(null);

export function DetailDataProvider({ children }: { children: React.ReactNode }) {
  const [detailData, setDetailData] = useState<Partial<DetailDataType>>({});

  return (
    <DetailDataStateContext.Provider value={detailData}>
      <SetDetailDataStateContext.Provider value={setDetailData as SetDetailDataState}>
        {children}
      </SetDetailDataStateContext.Provider>
    </DetailDataStateContext.Provider>
  );
}

export function useDetailDataStateContext() {
  const context = useContext(DetailDataStateContext);

  if (context === null) {
    throw new Error('Cannot find <DetailDataStateContext.Provider>');
  }

  return context;
}

export function useSetDetailDataStateContext() {
  const context = useContext(SetDetailDataStateContext);

  if (context === null) {
    throw new Error('Cannot find <SetDataStateContext.Provider>');
  }

  return context;
}
