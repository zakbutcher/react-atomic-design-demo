import React, { FunctionComponent } from 'react';
import { IDefaultProps, ILink } from 'types';
import { SubsectionTitle, PrimaryText } from 'elements';
import { Column, Row, FlexSpace, Spacer } from 'layouts';

export interface IMeetupCardProps extends IDefaultProps {
  /**
   * [required] Title text to display on card
   */
  title: string;
  /**
   * [optional] Link to meetup page
   */
  meetupLink?: ILink;
  /**
   * [optional] Link to repo
   */
  repoLink?: ILink;
  /**
   * [optional] Link to presentation (should be in Repo, but just in case)
   */
  presentationLink?: ILink;
  /**
   * [required] Body text to display on card
   */
  body: string;
}

interface ILabelWithLinkProps {
  /**
   * [required] Label Text
   */
  label: string;
  /**
   * [required] Link information
   */
  link: ILink;
}

const LabelWithLink: FunctionComponent<ILabelWithLinkProps> = props => (
  <Row>
    {props.label}:
    <Spacer width={FlexSpace.MEDIUM} />
    <a target="_" href={props.link.url}>
      {props.link.name}
    </a>
  </Row>
);

export const MeetupCard: FunctionComponent<IMeetupCardProps> = props => (
  <Column>
    <SubsectionTitle data-testid="meetup-card-title">{props.title}</SubsectionTitle>
    {!!props.meetupLink && <LabelWithLink label="Meetup" link={props.meetupLink} />}
    {!!props.repoLink && <LabelWithLink label="Repo" link={props.repoLink} />}
    {!!props.presentationLink && (
      <LabelWithLink label="Presentation" link={props.presentationLink} />
    )}
    <PrimaryText data-testid="meetup-card-body">{props.body}</PrimaryText>
  </Column>
);
