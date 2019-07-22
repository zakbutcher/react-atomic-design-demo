import { IFSA } from './fsa';
import { isString } from 'utils';
import { Schema } from 'normalizr';

export const API_CALL = 'API_CALL';

export enum RequestMethod {
  GET = 'get',
}

export type TRsaaType = string | IFSA;
export type TRsaaTypes = [TRsaaType, TRsaaType, TRsaaType];

export interface IRSAA {
  [API_CALL]: {
    endpoint: string;
    method: RequestMethod;
    schema?: Schema;
    types: TRsaaTypes;
  };
}

const parseType = (type: TRsaaType) => {
  if (isString(type)) {
    return type;
  }
  return type.type;
};

export const parseRsaaTypes = (action: IRSAA) => {
  const types = action[API_CALL].types;
  const request = types.find(t => parseType(t).includes('REQUEST'));
  const success = types.find(t => parseType(t).includes('SUCCESS'));
  const failure = types.find(t => parseType(t).includes('FAILURE'));
  return { request, success, failure };
};
