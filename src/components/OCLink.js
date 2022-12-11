import React from 'react';
import { NavLink } from 'react-router-dom';

const OCLink = ({ to, children }) => {
  return (
    <NavLink to={to} textDecoration="none">
      {children}
    </NavLink>
  );
};

export default OCLink;
