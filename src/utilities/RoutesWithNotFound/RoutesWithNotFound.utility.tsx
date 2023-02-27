import React from 'react';
import { Route, Routes } from 'react-router-dom';

interface Props {
  children: JSX.Element[] | JSX.Element;
}

export interface RoutesWithNotFoundInterface {}
const RoutesWithNotFound = ({ children }: Props) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default RoutesWithNotFound;
