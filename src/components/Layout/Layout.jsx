
import React from 'react';
import Header from './Header';
import { Container } from 'react-bootstrap';
// import '../../assets/styles/theme.css';

const Layout = ({ children }) => {


  const menuItems = [
    { name: 'Appointments', path: '/appointments' },
    { name: 'Patient Records', path: '/patient-records' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
     <Header title="My Website" menuItems={menuItems} />
        {children}
    </>
  );
};

export default Layout;
