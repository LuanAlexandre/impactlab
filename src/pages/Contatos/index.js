import React from 'react';
import { MainContent } from './styled';
import { coordenacao } from '../../assets/config/data';

export default function Contatos() {
  return (
    <MainContent className="mt-5">
      <div className="row justify-content-center text-center">
        <h3>Contatos</h3>
        <div className="col-md-6 mt-5 text-start">
          <h3>Coordenação</h3>
          <hr />
          <p>
            <strong>Nome</strong>
          </p>
          <p className="text-wrap text-break">{coordenacao[0].nome}</p>
          <p>
            <strong>E-mail</strong>
          </p>
          <p className="text-wrap text-break">{coordenacao[0].email}</p>
        </div>
      </div>
    </MainContent>
  );
}
