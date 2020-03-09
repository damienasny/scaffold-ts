import { css } from 'styled-components';

export const alpha = () => css`
    font-size: 1.7rem;
    line-height: 1.2em;
`;

export const mixins = {
    alpha,
};

export type Mixins = typeof mixins;
