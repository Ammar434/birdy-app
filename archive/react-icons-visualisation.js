import React from 'react';
import { IconContext } from 'react-icons';
import * as FiIcons from 'react-icons/fi';

const IconList = () => {
  const icons = Object.keys(FiIcons).map((icon) => FiIcons[icon]);
  // create an array of all the Feather Icons

  return (
    <IconContext.Provider value={{ size: '3rem' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {icons.map((Icon, index) => (
          <div key={index} style={{ margin: '0.5rem' }}>
            <Icon />
            <div style={{ fontSize: '0.8rem', textAlign: 'center' }}>
              {Icon.displayName}
            </div>
          </div>
        ))}
      </div>
    </IconContext.Provider>
  );
};

export default IconList;
