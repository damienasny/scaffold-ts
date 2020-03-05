import { PostsStore, postStore } from './posts';

export type Stores = {
    postStore: PostsStore;
};

export default {
    postStore
};

export const useStores = () => ({
    postStore
})