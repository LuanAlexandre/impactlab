import React from 'react';
import { StyledImage } from './styled';
import Logotipo from '../../assets/images/logo/logo-branco-sem-fundo.png';

export default function Logo() {
  return (
    <StyledImage
      className="image-fluid d-inline-block align-top"
      src={Logotipo}
      alt="exemplo de logotipo"
    />
  );
}
