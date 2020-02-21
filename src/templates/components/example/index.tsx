import React, { ElementType, SFC } from 'react';

type ExampleProps = {
    href: string;
    title: string;
    summary: string;
};

export const Example: SFC<ExampleProps> = ({ href, title, summary, children }) => (
    <a href={href} className="example">
        <div className="example__bd">
            {title && <h1 className="example__title">{title}</h1>}
            {summary && <div className="example__summary">{summary}</div>}
            {children}
        </div>
    </a>
);

export const Ghost: SFC<{}> = () => (
    <div className="example ghost">
        <div className="example__bd">
            <div className="example__title" />
            <div className="example__summary" />
        </div>
    </div>
);

export const Empty: SFC<{}> = () => <div className="example example--empty" />;

export const Error: SFC<{}> = () => <div className="example example--error" />;

export default Example;