// // src/components/Layout/Header.jsx
// import React, { useContext } from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { ThemeContext } from '../../contexts/ThemeProvider';
// import '../../fontAwesome';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   const { theme, toggleTheme } = useContext(ThemeContext);

//   return (
//     <Navbar className="header">
//       <Container fluid>
//         <Link to="/">
//           <Navbar.Brand>MediConnect</Navbar.Brand>
//         </Link>
//         <Nav className="ml-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/appointments">cAppointments</Nav.Link>
//             <Nav.Link as={Link} to="/patient-records">Patient Records</Nav.Link>
//           <Nav.Link onClick={toggleTheme} className="theme-switch">
//             <FontAwesomeIcon icon={theme === 'light' ? 'moon' : 'sun'} />
//           </Nav.Link>
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default Header;

import React, { useContext } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ThemeContext } from "../../contexts/ThemeProvider";
import "../../fontAwesome";
const Header = ({ title, menuItems }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="header">
          {title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto header">
            {menuItems.map((item, index) => (
              <Nav.Link as={Link} to={item.path} key={index}>
                {item.name}
              </Nav.Link>
            ))}
            <Nav.Link onClick={toggleTheme} className="theme-switch">
              <FontAwesomeIcon icon={theme === "light" ? "moon" : "sun"} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
