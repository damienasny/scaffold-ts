// import original module declarations
import 'styled-components';
import { Colors } from './theme/colors';
import { Fonts } from './theme/fonts';
import { Mixins } from './theme/mixins';
import { Abstract } from './theme/abstract';
import { Base } from './base/';

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        abstract: Abstract;

        colors: Colors;

        fonts: Fonts;

        mixins: Mixins;
    }
}
