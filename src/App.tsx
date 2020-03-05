import React, { SFC } from "react"
import HomePage from "./templates/pages"
import { Post } from "./stores/posts"
import DefaultLayout from './templates/layouts/default';

export type AppProps = {
    posts: Post[];
}

export const App: SFC<AppProps> = (props) => {
    const { posts } = props;

    return (
        <DefaultLayout title="Home">
            <ul>
                {
                    posts.map(post => (
                        <li key={`${post.userId}_${post.id}`}>{post.title}</li>
                    ))
                }
            </ul>
        </DefaultLayout>
    );
}