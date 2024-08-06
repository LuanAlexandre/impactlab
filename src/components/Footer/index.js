import React from 'react';
import { StyledFooter } from './styled';
import ufam from '../../assets/images/logo/ufam_logo.png';
import icomp from '../../assets/images/logo/icomp_logo.png';
import LinkHome from '../Links/Home';
import LinkCurso from '../Links/Curso';
import LinkDocentes from '../Links/Docentes';
import LinkEditais from '../Links/Editais';
import LinkContatos from '../Links/Contatos';
import LinkLocalizacao from '../Links/Localizacao';

export default function Footer() {
  return (
    <StyledFooter className="p-5 p-1 mx-0 mt-5 border-top">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-4 col-sm-6">
          <div className="text-center">
            <img src={ufam} alt="logo ufam" width="20%" height="20%" />
            <img src={icomp} alt="logo ufam" width="40%" height="40%" />
          </div>
        </div>
        <div className="col-md-2 col-sm-6">
          <h5>Site</h5>
          <ul>
            <li>
              <LinkHome />
            </li>
            <li>
              <LinkCurso />
            </li>
            <li>
              <LinkDocentes />
            </li>
            <li>
              <LinkEditais />
            </li>
            <li>
              <LinkContatos />
            </li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6">
          <h5>Instituto de Computação</h5>
          <ul>
            <li>Avenida General Rodrigo Octávio Jordão Ramos, 6200</li>
            <li>UFAM - Setor Norte</li>
            <li>69080-900 - Manaus - AM</li>
            <li>
              <LinkLocalizacao />
            </li>
          </ul>
        </div>
      </div>
    </StyledFooter>
  );
}
