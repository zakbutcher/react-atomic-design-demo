// #region Imports
import React, { FunctionComponent, useContext, useEffect } from 'react';
import { Tab, Accordions } from 'modules';
import {
  Column,
  FlexSpace,
  Row,
  Border,
  BorderRadius,
  InjectElement,
  Hr,
} from 'layouts';
import {
  ApiContext,
  fetchBooks,
  fetchCharacters,
  fetchHouses,
  TEntities,
} from './state';
import { BookCard, CharacterCard, HouseCard } from './components/card';
import { getDataForCards } from './selectors';
import { TogglesContext } from 'modules/toggles/reducer';
import { FormContext } from 'modules/forms';
import { IBook, ICharacter, IHouse } from './types';
import { Filters } from './components/filters';
// #endregion Imports

export enum Category {
  BOOKS = 'books',
  CHARACTERS = 'characters',
  HOUSES = 'houses',
}

export const leftPanel = (
  <>
    <Tab.Label tabName={Category.BOOKS}>Books</Tab.Label>
    <Tab.Label tabName={Category.CHARACTERS}>Characters</Tab.Label>
    <Tab.Label tabName={Category.HOUSES}>Houses</Tab.Label>
  </>
);

export const AnApiOfIceAndfire: FunctionComponent<{}> = () => {
  /**
   * Access the provided contexts from parent components and rename them
   * to prevent name collisions
   */
  const { state: apiState, dispatch } = useContext(ApiContext);
  const { state: toggleState } = useContext(TogglesContext);
  const { state: formState } = useContext(FormContext);
  const activeTab = toggleState.activeToggles[0];

  /**
   * On page render fetch all the data we'll need.  The fetchCharacters() action
   * can take a few seconds to retrieve all the character data so this helps streamline
   * the demo
   */
  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchCharacters());
    dispatch(fetchHouses());
  }, []);

  /**
   * Helper function to filter the data currently being viewed by the user
   */
  const filterByName = (data: TEntities[]) => {
    const value = !!formState[activeTab] ? formState[activeTab].value : '';
    return data.filter(d => d.name.toLowerCase().includes(value));
  };

  /**
   * Use a selector to retrieve data from state in a memoized fashion.  In larger projects
   * this helps with performance by ensuring data is only refreshed when it actually changes
   */
  const data = getDataForCards(filterByName)(apiState, activeTab);
  const filteredData = filterByName(data);

  /**
   * Render `Tab.Content` components for each `Tab.Label`, using the appropriate card
   * component for each data type.
   *
   * Also include an `Accordions` component to hold the contextual search filter as a
   * bonus feature.
   */
  return (
    <Column childSpacing={FlexSpace.MEDIUM}>
      <Row
        padding={FlexSpace.SMALL}
        border={Border.FULL}
        borderRadius={BorderRadius.BASE}
      >
        <Accordions>
          {[
            {
              key: 'filters',
              header: 'Filters',
              content: <Filters activeKey={activeTab} />,
            },
          ]}
        </Accordions>
      </Row>
      <Column childSpacing={FlexSpace.SMALL}>
        <Tab.Content tabName={Category.BOOKS}>
          <InjectElement inject={<Hr />}>
            {(filteredData as IBook[]).map(book => (
              <BookCard
                key={book.id}
                name={book.name}
                format={book.mediaType}
                numPages={book.numberOfPages}
              />
            ))}
          </InjectElement>
        </Tab.Content>
        <Tab.Content tabName={Category.CHARACTERS}>
          <InjectElement inject={<Hr />}>
            {(filteredData as ICharacter[]).map(character => (
              <CharacterCard
                key={character.id}
                name={character.name}
                aliases={character.aliases}
              />
            ))}
          </InjectElement>
        </Tab.Content>
        <Tab.Content tabName={Category.HOUSES}>
          <InjectElement inject={<Hr />}>
            {(filteredData as IHouse[]).map(house => (
              <HouseCard key={house.id} name={house.name} motto={house.coatOfArms} />
            ))}
          </InjectElement>
        </Tab.Content>
      </Column>
    </Column>
  );
};
