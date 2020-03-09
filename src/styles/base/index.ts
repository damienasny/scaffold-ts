import { css } from 'styled-components';
import { normalise } from './normalise';
import { typefaces } from './typefaces';

export const base = css`
    ${normalise}
    ${typefaces}
`;

export type Base = typeof base;
