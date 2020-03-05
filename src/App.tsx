import React, { SFC } from 'react';
import { Post } from './stores/posts';
import DefaultLayout from './templates/layouts/default';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';

export type AppProps = {
    posts: Post[];
};

const Block = styled.div`
    display: flex;
    flex: 1;
    background: lightgrey;
    border-radius: 5px;
    padding: 0.5rem;
    margin: 0.5rem;

    p {
        ${props => props.theme.mixins.alpha()}
    }
`;

export const App: SFC<AppProps> = props => {
    const { posts } = props;

    return (
        <ThemeProvider theme={theme}>
            <DefaultLayout title="Home">
                <Block>
                    <p>Hello</p>
                </Block>
                <ul>
                    {posts.map(post => (
                        <li key={`${post.userId}_${post.id}`}>{post.title}</li>
                    ))}
                </ul>
            </DefaultLayout>
        </ThemeProvider>
    );
};
