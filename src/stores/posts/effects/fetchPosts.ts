import { postsService } from "../service";
import { postStore } from "..";

export const fetchPosts = () => {
    postsService
        .getPosts()
        .then(items => postStore.updateItems(items))
};
