import { createContext } from 'react';
import {
  IFSA,
  IRSAA,
  API_CALL,
  RequestMethod,
  parseRsaaTypes,
  TRsaaType,
} from 'types';
import { isApiCall, isString, isArray } from 'utils';
import axios from 'axios';
import { normalize, schema as s, Schema } from 'normalizr';
import { BookSchema, CharacterSchema, HouseSchema } from './schemas';
import { IBook, ICharacter, IHouse } from './types';
import parseLinkHeader from 'parse-link-header';

const API_ROOT_URL = 'https://anapioficeandfire.com/api/';

// #region Context Setup
export type TEntities = IBook | ICharacter | IHouse;
export interface IEntity<T extends TEntities> {
  [key: string]: T;
}
export interface IApiState {
  books: IEntity<IBook>;
  characters: IEntity<ICharacter>;
  houses: IEntity<IHouse>;
  [key: string]: IEntity<TEntities>;
}

type TApiDispatch = (action: ApiActions | IFSA | IRSAA) => void;

interface IApiContext {
  /**
   * State data for context
   */
  state: IApiState;
  /**
   * Callback for dispatching actions
   */
  dispatch: TApiDispatch;
}

export const INITIAL_CONTEXT: IApiContext = {
  state: {
    books: {},
    characters: {},
    houses: {},
  },
  dispatch: _ => null,
};

export const ApiContext = createContext<IApiContext>(INITIAL_CONTEXT);
// #endregion Context Setup

// #region Actions
// #region Fetch Books
interface IFetchBooksRequest extends IFSA {
  type: 'FETCH_BOOKS-REQUEST';
}
interface IFetchBooksSuccess extends IFSA {
  type: 'FETCH_BOOKS-SUCCESS';
}
interface IFetchBooksFailure extends IFSA {
  type: 'FETCH_BOOKS-FAILURE';
}

export interface IFetchBooks extends IRSAA {
  [API_CALL]: {
    endpoint: 'books';
    method: RequestMethod.GET;
    schema: Schema;
    types: ['FETCH_BOOKS-REQUEST', 'FETCH_BOOKS-SUCCESS', 'FETCH_BOOKS-FAILURE'];
  };
}

export const fetchBooks = (): IRSAA => ({
  [API_CALL]: {
    endpoint: 'books',
    method: RequestMethod.GET,
    schema: BookSchema,
    types: ['FETCH_BOOKS-REQUEST', 'FETCH_BOOKS-SUCCESS', 'FETCH_BOOKS-FAILURE'],
  },
});
// #region Fetch Books

// #region Fetch Characters
interface IFetchCharactersRequest extends IFSA {
  type: 'FETCH_CHARACTERS-REQUEST';
}
interface IFetchCharactersSuccess extends IFSA {
  type: 'FETCH_CHARACTERS-SUCCESS';
}
interface IFetchCharactersFailure extends IFSA {
  type: 'FETCH_CHARACTERS-FAILURE';
}

export interface IFetchCharacters extends IRSAA {
  [API_CALL]: {
    endpoint: 'characters';
    method: RequestMethod.GET;
    schema: Schema;
    types: [
      'FETCH_CHARACTERS-REQUEST',
      'FETCH_CHARACTERS-SUCCESS',
      'FETCH_CHARACTERS-FAILURE',
    ];
  };
}

export const fetchCharacters = (): IRSAA => ({
  [API_CALL]: {
    endpoint: 'characters',
    method: RequestMethod.GET,
    schema: CharacterSchema,
    types: [
      'FETCH_CHARACTERS-REQUEST',
      'FETCH_CHARACTERS-SUCCESS',
      'FETCH_CHARACTERS-FAILURE',
    ],
  },
});
// #region Fetch Characters

// #region Fetch Houses
interface IFetchHousesRequest extends IFSA {
  type: 'FETCH_HOUSES-REQUEST';
}
interface IFetchHousesSuccess extends IFSA {
  type: 'FETCH_HOUSES-SUCCESS';
}
interface IFetchHousesFailure extends IFSA {
  type: 'FETCH_HOUSES-FAILURE';
}

export interface IFetchHouses extends IRSAA {
  [API_CALL]: {
    endpoint: 'houses';
    method: RequestMethod.GET;
    schema: Schema;
    types: ['FETCH_HOUSES-REQUEST', 'FETCH_HOUSES-SUCCESS', 'FETCH_HOUSES-FAILURE'];
  };
}

export const fetchHouses = (): IRSAA => ({
  [API_CALL]: {
    endpoint: 'houses',
    method: RequestMethod.GET,
    schema: HouseSchema,
    types: ['FETCH_HOUSES-REQUEST', 'FETCH_HOUSES-SUCCESS', 'FETCH_HOUSES-FAILURE'],
  },
});
// #region Fetch Houses

export type ApiActions =
  | IFetchBooksRequest
  | IFetchBooksSuccess
  | IFetchBooksFailure
  | IFetchCharactersRequest
  | IFetchCharactersSuccess
  | IFetchCharactersFailure
  | IFetchHousesRequest
  | IFetchHousesSuccess
  | IFetchHousesFailure;
// #endregion Actions

// #region Reducer
export const apiReducer = (
  state: IApiState = INITIAL_CONTEXT.state,
  action: ApiActions,
) => {
  switch (action.type) {
    case 'FETCH_BOOKS-REQUEST':
    case 'FETCH_BOOKS-FAILURE':
    case 'FETCH_CHARACTERS-REQUEST':
    case 'FETCH_CHARACTERS-FAILURE':
    case 'FETCH_HOUSES-REQUEST':
    case 'FETCH_HOUSES-FAILURE':
      return state;
    case 'FETCH_BOOKS-SUCCESS':
    case 'FETCH_CHARACTERS-SUCCESS':
    case 'FETCH_HOUSES-SUCCESS':
      return {
        ...state,
        ...action.payload.entities,
      };
    default:
      return state;
  }
};
// #endregion Reducer

// #region Middleware
const asAction = (type: TRsaaType, payload: any = {}): IFSA => {
  if (isString(type)) {
    return {
      type,
      payload,
    };
  }
  return {
    ...type,
    payload,
  };
};

const fetchPaginatedData = async (link: parseLinkHeader.Link) => {
  let dataIsBeingFetched = true;
  let request = {
    url: link.url,
    method: RequestMethod.GET,
  };

  let paginatedData: IEntity<TEntities>[] = [];
  do {
    const response = await axios(request);

    if (response.status === 200) {
      const links = parseLinkHeader(response.headers.link);

      paginatedData = paginatedData.concat(response.data);
      if (!!links.next) {
        request.url = links.next.url;
      } else {
        dataIsBeingFetched = false;
      }
    } else {
      dataIsBeingFetched = false;
    }
  } while (dataIsBeingFetched);
  return paginatedData;
};

export const apiMiddleware = async (
  action: ApiActions | IRSAA,
  dispatch: TApiDispatch,
) => {
  if (!isApiCall(action)) {
    return dispatch(action);
  }

  const { request, success, failure } = parseRsaaTypes(action);

  dispatch(asAction(request));
  try {
    const { endpoint, method, schema } = action[API_CALL];
    const request = {
      url: `${API_ROOT_URL}${endpoint}?pageSize=50`,
      method,
    };
    const response = await axios(request);

    if (response.status === 200) {
      /**
       * If the response has a `link` field in the header, it means the results are paginated.
       * For a better demo, we'll automatically fetch the remaining pages of data so there's more
       * "stuff" to play with
       */
      const links = response.headers.link
        ? parseLinkHeader(response.headers.link)
        : null;
      const paginatedData = !!links.next ? await fetchPaginatedData(links.next) : [];

      if (schema) {
        const actionSchema = isArray(response.data) ? new s.Array(schema) : schema;
        const data = normalize(response.data.concat(paginatedData), actionSchema);

        return dispatch(asAction(success, data));
      }
    }
    return dispatch(asAction(success, response.data));
  } catch (e) {
    dispatch(asAction(failure));
  }
};
// #endregion Middleware
