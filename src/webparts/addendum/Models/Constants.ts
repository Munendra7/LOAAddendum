import { IDropdownStyles } from 'office-ui-fabric-react';

export default class Constants
{
    public static dropdownStyles: Partial<IDropdownStyles> = {
        dropdown: { width: 300 },
        dropdownItemSelected: {
          selectors: {
            '&:before': {
              content: '""',
              position: 'absolute',
              left: 0,
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'rgb(0, 120, 212)',
            },
          },
        },
      };
}

