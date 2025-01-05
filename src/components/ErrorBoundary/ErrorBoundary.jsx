import { useDispatch } from 'react-redux';
import { logout } from '../../features/Auth/authSlice';
import React from 'react';

export default function ErrorBoundary(children) {
  console.log('Children::::::::>', children);
  let dispatch = useDispatch();
  return (
    <>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onUnauthorized: () => dispatch(logout()) }),
      )}
    </>
  );
}
