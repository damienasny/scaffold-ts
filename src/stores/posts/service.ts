import { Post } from '.';

export class PostsService {
    public getPosts(): Promise<Post[]> {
        return fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
            res.json()
        );
    }
}

export const postsService = new PostsService();
