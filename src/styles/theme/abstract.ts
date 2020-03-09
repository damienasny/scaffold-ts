import { css } from 'styled-components';

const mixins = {
    visuallyhidden: () => css`
        position: absolute;
        visibility: hidden;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0 0 0 0);
        border: 0;
    `,

    visible: () => css`
        position: static;
        visibility: visible;
        width: auto;
        height: auto;
        padding: 0;
        margin: auto;
        overflow: inherit;
        clip: auto;
    `,

    clearfix: () => css`
        &:after {
            content: '';
            display: table;
            clear: both;
            width: 100%;
        }
    `,
};

export const abstract = {
    '--font-family-default': 'sans-serif',

    '--font-size-plus-4': '1rem',
    '--font-size-plus-3': '1rem',
    '--font-size-plus-2': '1rem',
    '--font-size-plus-1': '1rem',
    '--font-size-baseline': '1rem',
    '--font-size-minus-1': '1rem',
    '--font-size-minus-2': '1rem',
    '--font-size-minus-3': '1rem',
    '--font-size-minus-4': '1rem',

    '--baseline': '1.5rem',
    '--gutter': '24px',
    '--max-container-width': '1200px',

    '--light-grey-1': 'hsl(0, 0%, 96%)',
    '--light-grey-2': 'hsl(0, 0%, 90%)',
    '--light-grey-3': 'hsl(0, 0%, 80%)',
    '--mid-grey-1': 'hsl(0, 0%, 70%)',
    '--mid-grey-2': 'hsl(0, 0%, 60%)',
    '--mid-grey-3': 'hsl(0, 0%, 50%)',
    '--dark-grey-1': 'hsl(0, 0%, 46%)', //lightest AA accessible grey on white",
    '--dark-grey-2': 'hsl(0, 0%, 30%)',
    '--dark-grey-3': 'hsl(0, 0%, 20%)',
    '--off-black': 'hsl(0, 0%, 10%)',

    '--light-weight': '300',
    '--regular-weight': '400',
    '--medium-weight': '500',
    '--semibold-weight': '600',
    '--bold-weight': '700',

    '--measure': '40em',

    '--bp-xs': '480px',
    '--bp-sm': '768px',
    '--bp-md': '1024px',
    '--bp-lg': '1200px',

    mixins,

    columns: 12,

    'mq-breakpoints': {
        xs: '480px',
        sm: '768px',
        md: '1024px',
        lg: '1200px',
    },

    'grid-names': {
        xs: 'default',
        sm: 'sm',
        md: 'md',
        lg: 'lg',
    },
};

export type Abstract = typeof abstract;
