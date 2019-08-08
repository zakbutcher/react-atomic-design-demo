import { useState } from 'react';

export const useToggle = (defaultOn: boolean = false) => {
  const [on, setToggle] = useState(defaultOn);

  const toggle = () => setToggle(!on);
  const setOn = () => setToggle(true);
  const setOff = () => setToggle(false);

  return {
    on,
    setOn,
    setOff,
    toggle,
  };
};
