import React, { SFC } from 'react';
import Skip from '../components/skip';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

type Props = {
    title: string;
};

const Default: SFC<Props> = ({ children, title }) => <>
    <Header>
        <Skip />
    </Header>
    <Main>
        { children }
    </Main>
    <Footer />
</>;

export default Default;