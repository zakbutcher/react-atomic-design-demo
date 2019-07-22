import React from 'react';
import { render } from '@testing-library/react';
import { MeetupCard } from 'compounds';

describe('Cards', () => {
  describe('Meetup Card', () => {
    const title = 'Meetup Card';
    const body = 'Meetup card body';
    const meetup = {
      title,
      meetupLink: {
        name: 'Meetup Link',
        url: 'www.meetuplink.com',
      },
      repoLink: {
        name: 'Repo Link',
        url: 'www.repolink.com',
      },
      presentationLink: {
        name: 'Presentation Link',
        url: 'www.presentationlink.com',
      },
      body,
    };
    const { container, getByTestId } = render(<MeetupCard {...meetup} />);

    it('Renders Heading', () => {
      const heading = getByTestId('meetup-card-title');
      expect(heading).toBeDefined();
    });

    it('Shows All Links', () => {
      const links = container.querySelectorAll('a');
      expect(links.length).toEqual(3);
      links.forEach(link => {
        expect(link.href).toMatch(/www\..*link\.com/);
      });
    });

    it('Renders Body', () => {
      const body = getByTestId('meetup-card-body');
      expect(body).toBeDefined();
    });
  });
});
