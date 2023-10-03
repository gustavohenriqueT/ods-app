import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <Link to="/login" style={{ textDecoration: 'none', color: '#010101', position: 'relative' }}>
      Entrar <FiLogIn style={{ position: 'absolute', top: '1px' }} />
    </Link>
  );
};

export default LoginButton;
