import { css } from 'styled-components';

export const typefaces = css`
    @font-face {
        font-family: system;
        font-style: normal;
        font-weight: 300;
        src: local('.SFNSText-Light'),
            local('.HelveticaNeueDeskInterface-Light'), local('.LucidaGrandeUI'),
            local('Ubuntu Light'), local('Segoe UI Light'),
            local('Roboto-Light'), local('DroidSans'), local('Tahoma');
    }

    body {
        font-family: 'system';
    }
    body,
    button,
    input,
    select,
    textarea {
        font: 100%/1.5 'system';
        color: ${props => props.theme.abstract['--off-black']};
    }

    input,
    select,
    textarea {
        font-size: 0.99rem;
        line-height: 1rem;
    }
`;
