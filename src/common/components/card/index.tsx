import React, { useState, FC } from 'react';
type Props = {
    name: string;
}

export const Card: FC<Props> = (props) => {
    const [counter, setCounter] = useState<number>(0);
    const { name } = props;

    function onClick(event: any) {
        event.preventDefault();
        setCounter(counter+1);
    }

    return (
        <div>
            <p>Hello { name }</p>
            <p>You clicked { counter } times</p>
            <button onClick={onClick}>Click this !</button>
        </div>
    );
}