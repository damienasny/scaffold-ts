import React, { SFC } from 'react';

type Props = {
    href?: string;
    label?: string;
}

const Skip: SFC<Props> = ({
    href = '#main',
    label = 'Skip to main content'
}) => <div className="skip"><a className="skip__btn" href={href}>{label}</a></div>;

export default Skip;