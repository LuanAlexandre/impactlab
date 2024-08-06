import styled from 'styled-components';
import { corHeader, corTitleFont } from '../../assets/config/color';
import { Navbar } from 'react-bootstrap';

export const StyledNavbar = styled(Navbar)`
  background-color: ${corHeader};
  justify-content: center;
  align-items: center;

  a {
    color: ${corTitleFont};
    font-size: 1.2rem;
    font-family: monospace;
    text-decoration: none;
  }

  img {
    max-height: 15vh;
  }

  .navbar-toggler {
    color: ${corHeader};
  }

  .navbar-toggler:hover,
  .navbar-toggler.collapsed {
    color: ${corTitleFont};
  }

  .navbar-toggler,
  .navbar-toggler-icon {
    background-color: ${corTitleFont};
  }
`;
