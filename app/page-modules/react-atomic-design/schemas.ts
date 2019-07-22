import { schema } from 'normalizr';

interface IObjectWithUrlField {
  url: string;
  [key: string]: any;
}

const parseId = (d: IObjectWithUrlField) => {
  const splitUrl = d.url.split('/');
  return splitUrl[splitUrl.length - 1];
};

const processStrategy = (d: IObjectWithUrlField) => {
  return {
    ...d,
    id: parseId(d),
  };
};

export const BookSchema = new schema.Entity(
  'books',
  {},
  { idAttribute: parseId, processStrategy },
);
export const CharacterSchema = new schema.Entity(
  'characters',
  {},
  { idAttribute: parseId, processStrategy },
);
export const HouseSchema = new schema.Entity(
  'houses',
  {},
  { idAttribute: parseId, processStrategy },
);

BookSchema.define({
  characters: [CharacterSchema],
  povCharacters: [CharacterSchema],
});
CharacterSchema.define({
  alegiences: [HouseSchema],
  books: [BookSchema],
  povBooks: [BookSchema],
});
HouseSchema.define({
  currentLord: CharacterSchema,
  cadetBranches: [HouseSchema],
  swornMembers: [CharacterSchema],
});
