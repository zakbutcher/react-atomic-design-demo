import React from 'react';
import { Flex, FlexBehavior, SpacerSize, Padding, Shadow } from '../5_layouts';
import {
  Menu,
  Colors,
  Fonts,
  Comment,
  Search,
  Video,
  Grid,
  Bell,
  FontWeight,
  Youtube,
  Brand,
  Button,
  Input,
} from '../1_elements';

const Row = Flex.Row;
const Spacer = Flex.Spacer;

export const Header = props =>
  console.log(props) || (
    <Row flex={FlexBehavior.SHRINK} padding={Padding.SMALL} shadow={Shadow.BOTTOM}>
      <Spacer size={SpacerSize.LARGE} />
      <Row flex={FlexBehavior.SHRINK} onClick={props.togglePage}>
        <Menu />
        <Spacer size={SpacerSize.LARGE} />
        <Youtube color={Colors.RED} />
        <Spacer size={SpacerSize.SMALL} />
        <Fonts.Heading weight={FontWeight.BOLD}>Premium</Fonts.Heading>
      </Row>
      <Spacer />
      <Row>
        <Input placeholder="Search" />
        <Button>
          <Search />
        </Button>
      </Row>
      <Spacer />
      <Row>
        <Video />
        <Spacer />
        <Grid />
        <Spacer />
        <Comment />
        <Spacer />
        <Bell />
        <Spacer />
        <Brand />
      </Row>
    </Row>
  );
