import { createSelector } from 'reselect';
import { IApiState, TEntities } from './state';

type TFilterDataCallback = (data: TEntities[]) => TEntities[];

const getDataForKey = (state: IApiState, key: string) => state[key];
export const getDataForCards = <T extends TEntities>(
  filterData: TFilterDataCallback,
) =>
  createSelector(
    [getDataForKey],
    data => (!!data ? (filterData(Object.values(data)) as T[]) : []),
  );
