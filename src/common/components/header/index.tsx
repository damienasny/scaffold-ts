import React, { SFC } from 'react';

const Header: SFC<{}> = ({ children }) => <header className="header">{ children }</header>;
export default Header;