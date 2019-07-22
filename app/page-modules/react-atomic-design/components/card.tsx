import React, { FunctionComponent } from 'react';
import { IDefaultProps } from 'types';
import { Row, Column, FlexSpace } from 'layouts';
import { SubsectionTitle, PrimaryText } from 'elements';

interface IDataCardProps extends IDefaultProps {
  /**
   * [required] Primary data point to show
   */
  title: string;
  /**
   * [required] Secondary data point to show
   */
  subTitle: string;
}

const DataCard: FunctionComponent<IDataCardProps> = props => {
  return (
    <Row padding={FlexSpace.SMALL}>
      <Column>
        <SubsectionTitle>{props.title}</SubsectionTitle>
        <PrimaryText emphasis>{props.subTitle}</PrimaryText>
      </Column>
    </Row>
  );
};

interface IBookCardProps {
  /**
   * [required] Name of book
   */
  name: string;
  /**
   * [required] Format of book (i.e. hardcover, paperback, etc)
   */
  format: string;
  /**
   * [required] Number of pages in book
   */
  numPages: number;
}
export const BookCard: FunctionComponent<IBookCardProps> = props => {
  const subTitle = `${props.format} / ${props.numPages} pages`;
  return <DataCard title={props.name} subTitle={subTitle} />;
};

interface ICharacterCardProps {
  /**
   * [required] Name of character
   */
  name: string;
  /**
   * [required] Alternative names for character
   */
  aliases: string[];
}
export const CharacterCard: FunctionComponent<ICharacterCardProps> = props => {
  const subTitle = props.aliases.join(', ');
  return <DataCard title={props.name} subTitle={subTitle} />;
};

interface IHouseCardProps {
  /**
   * [required] Name of house
   */
  name: string;
  /**
   * [required] House's Coat of Arms
   */
  motto: string;
}
export const HouseCard: FunctionComponent<IHouseCardProps> = props => {
  return <DataCard title={props.name} subTitle={props.motto} />;
};
