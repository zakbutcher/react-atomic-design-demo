import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBug,
  faSearch,
  faVideo,
  faTh,
  faComment,
  faBell,
  faHome,
  faFire,
  faStream,
  faFolder,
  faPen,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Colors } from './colors';

const IconSize = {
  DEFAULT: '2x',
  XSMALL: 'lg',
  SMALL: '2x',
};

export const BaseIcon = props => (
  <FontAwesomeIcon
    size={IconSize.DEFAULT}
    color={Colors.DARK_GREY}
    icon={faBug}
    {...props}
  />
);

export const Menu = props => (
  <BaseIcon {...props} icon={faBars} size={IconSize.SMALL} />
);
export const Youtube = props => <BaseIcon {...props} icon={faYoutube} />;
export const Search = props => (
  <BaseIcon
    {...props}
    icon={faSearch}
    color={Colors.DARK_GREY}
    size={IconSize.XSMALL}
  />
);
export const Video = props => <BaseIcon {...props} icon={faVideo} />;
export const Grid = props => <BaseIcon {...props} icon={faTh} />;
export const Comment = props => <BaseIcon {...props} icon={faComment} />;
export const Bell = props => <BaseIcon {...props} icon={faBell} />;
export const Home = props => <BaseIcon {...props} icon={faHome} />;
export const Fire = props => <BaseIcon {...props} icon={faFire} />;
export const Subscriptions = props => <BaseIcon {...props} icon={faStream} />;
export const Folder = props => <BaseIcon {...props} icon={faFolder} />;
export const Pencil = props => <BaseIcon {...props} icon={faPen} />;
export const Brand = props => <div id="brand" />;
