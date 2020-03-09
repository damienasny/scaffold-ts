import { DefaultTheme } from 'styled-components';
import { mixins } from './mixins';
import { fonts } from './fonts';
import { colors } from './colors';
import { base } from '../base';
import { abstract } from './abstract';

const theme: DefaultTheme = {
    abstract,
    base,
    colors,
    fonts,
    mixins,
};

export { theme };
