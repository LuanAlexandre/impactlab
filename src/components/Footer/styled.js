import styled from 'styled-components';
import { corFooter, corTitleFont, corFont } from '../../assets/config/color';

export const StyledFooter = styled.footer`
  background: ${corFooter};
  color: ${corTitleFont};
  font-family: monospace;

  ul {
    list-style-type: none;
  }

  a,
  li {
    text-decoration: none;
    color: ${corFont};
  }

  .text-center {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
`;
