import { DefaultTheme } from 'styled-components';
import { mixins } from './mixins';
import { fonts } from './fonts';
import { colors } from './colors';
import { abstract } from './abstract';

const theme: DefaultTheme = {
    abstract,
    colors,
    fonts,
    mixins,
};

export { theme };
