import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import { corDetails, corHeader, colorDois } from '../../assets/config/color';

export const MainContent = styled(Container)`
  h2 {
    font-size: 2rem;
  }

  p {
    text-align: justify;
    font-size: 1.1em;
  }

  .dropdown {
    display: flex;
    justify-content: center;
  }

  #dropdown-basic {
    background: ${corDetails};
    border: ${corDetails};
  }

  .lista-docentes {
    display: flex;
    flex-flow: wrap;
    place-content: space-around center;
    background-color: #eee;
    border-radius: 5px;
  }

  ul {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin: 5px;
    padding: 20px;
  }
`;
