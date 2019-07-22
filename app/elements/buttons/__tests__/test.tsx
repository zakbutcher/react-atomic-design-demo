import React from 'react';
import {
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  ButtonColor,
} from 'elements';
import { render, fireEvent, cleanup } from '@testing-library/react';

describe('Buttons', () => {
  const onClick = jest.fn();

  beforeEach(() => {
    cleanup();
    onClick.mockClear();
  });

  describe('Primary', () => {
    it('Handles onClick', () => {
      const { getByTestId } = render(
        <PrimaryButton onClick={onClick}>Primary Button</PrimaryButton>,
      );

      fireEvent.click(getByTestId('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Renders All Variants', () => {
      const { container } = render(
        <>
          <PrimaryButton color={ButtonColor.BLUE} onClick={onClick}>
            Primary
          </PrimaryButton>
          <PrimaryButton color={ButtonColor.ORANGE} onClick={onClick}>
            Primary
          </PrimaryButton>
          <PrimaryButton color={ButtonColor.GREEN} onClick={onClick}>
            Primary
          </PrimaryButton>
          <PrimaryButton color={ButtonColor.BLACK} onClick={onClick}>
            Primary
          </PrimaryButton>
          <PrimaryButton color={ButtonColor.WHITE} onClick={onClick}>
            Primary
          </PrimaryButton>
        </>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Secondary', () => {
    it('Handles onClick', () => {
      const { getByTestId } = render(
        <SecondaryButton onClick={onClick}>Secondary Button</SecondaryButton>,
      );

      fireEvent.click(getByTestId('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Renders All Variants', () => {
      const { container } = render(
        <>
          <SecondaryButton color={ButtonColor.BLUE} onClick={onClick}>
            Secondary
          </SecondaryButton>
          <SecondaryButton color={ButtonColor.ORANGE} onClick={onClick}>
            Secondary
          </SecondaryButton>
          <SecondaryButton color={ButtonColor.GREEN} onClick={onClick}>
            Secondary
          </SecondaryButton>
          <SecondaryButton color={ButtonColor.BLACK} onClick={onClick}>
            Secondary
          </SecondaryButton>
          <SecondaryButton color={ButtonColor.WHITE} onClick={onClick}>
            Secondary
          </SecondaryButton>
        </>,
      );

      expect(container).toMatchSnapshot();
    });
  });

  describe('Tertiary', () => {
    it('Handles onClick', () => {
      const { getByTestId } = render(
        <TertiaryButton onClick={onClick}>Tertiary Button</TertiaryButton>,
      );

      fireEvent.click(getByTestId('button'));
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Renders All Variants', () => {
      const { container } = render(
        <>
          <TertiaryButton color={ButtonColor.BLUE} onClick={onClick}>
            Tertiary
          </TertiaryButton>
          <TertiaryButton color={ButtonColor.ORANGE} onClick={onClick}>
            Tertiary
          </TertiaryButton>
          <TertiaryButton color={ButtonColor.GREEN} onClick={onClick}>
            Tertiary
          </TertiaryButton>
          <TertiaryButton color={ButtonColor.BLACK} onClick={onClick}>
            Tertiary
          </TertiaryButton>
          <TertiaryButton color={ButtonColor.WHITE} onClick={onClick}>
            Tertiary
          </TertiaryButton>
        </>,
      );

      expect(container).toMatchSnapshot();
    });
  });
});
