import React, { useEffect } from 'react';
import { observer } from "mobx-react-lite"
import { useStores } from './stores';
import { fetchPosts } from './stores/posts/effects/fetchPosts';
import { getItems } from './stores/posts/selectors/getItems';
import { App, AppProps } from './App'

export const AppContainer = observer(() => {
    const stores = useStores()
    
    const props: AppProps = {
        posts: getItems(stores)
    }
  
    useEffect(fetchPosts, []);
  
    return <App {...props} />
  });
  