import { observable, action, computed } from "mobx";

export type Post = {
    userId: number;
    id: number;
    title: string;
}

export class PostsStore {
    @observable items: Post[] = [];

    @action updateItems = (items: Post[]) => {
        this.items = items;
    }

    @computed get firstItem() {
        return this.items[0];
    }
}

export const postStore = new PostsStore();
