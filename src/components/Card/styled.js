import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import { corCard, corDetails, corTitleFont } from '../../assets/config/color';

export const StyledCartao = styled(Card)`
  width: 18rem;
  text-decoration: none;
  background: ${corCard};
  border: ${corCard};

  .card-img {
    max-width: 100%;
    height: 250px;
  }

  .nome {
    min-height: 50px;
  }

  Button {
    background: ${corCard};
    border: ${corCard};
    border-radius: 50px;
    width: 3em;
    height: 3em;
    padding: 0;
    margin: 0;
  }

  Button > a {
    text-decoration: none;
    color: ${corTitleFont};
  }

  Button:hover {
    background: ${corDetails};
    border: ${corDetails};
  }

  p {
    font-size: 1em;
  }

  .lattes {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    width: 100%;
    height: 100%;
  }

  svg {
    width: 100%;
    height: 100%;
  }

  .botao-img g {
    fill: #6495ed;
  }

  .card-text {
    height: 100px;
  }
`;
