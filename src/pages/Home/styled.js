import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { corHeader, corTitleFont } from '../../assets/config/color';

export const MainContent = styled(Container)`
  font-family: monospace;
  color: ${corHeader};
  text-shadow: 0.5px 0.5px rgb(0, 0, 0);

  .imagens {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  h2 {
    font-size: 1.45em;
  }

  .info-curso {
    background-color: ${corHeader};
    color: ${corTitleFont};
    width: 10%;
    text-align: center;
    padding: 7px;
    font-size: 1.5em;
  }

  .btn,
  .btn:hover,
  .btn:focus,
  .btn:active,
  .btn > a {
    text-decoration: none;
    color: ${corTitleFont};
    background-color: ${corHeader};
    border: ${corHeader};
  }

  .btn > a {
    width: 100%;
  }

  .carousel {
    width: 100%;
    height: 100%;
  }

  .fixed-size {
    border-radius: 20px;
    width: 100%;
    height: 450px;
  }

  .logo-image-main {
    color: ${corHeader};
    border-radius: 10px;
  }

  .editalhome {
    //text-decoration: none;
    color: ${corHeader};
  }
`;
