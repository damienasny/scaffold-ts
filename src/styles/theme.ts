import { DefaultTheme } from 'styled-components';
import { mixins } from './mixins';

const theme: DefaultTheme = {
    borderRadius: '5px',

    colors: {
        main: 'cyan',
        secondary: 'magenta',
    },

    mixins,
};

export { theme };
