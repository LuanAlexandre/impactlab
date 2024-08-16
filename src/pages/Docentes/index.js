import React from 'react';
import { MainContent } from './styled';
import Cartao from '../../components/Card';
import { professores } from '../../assets/config/data';

export default function Docentes() {
  return (
    <MainContent>
      <div className="row g-3 justify-content-center mb-5">
        <div className="col-md-10 mt-5">
          <h2>Docentes</h2>
          <p>
            O Projeto IMPACT-LAB conta com a colaboração de Professores(as) com
            anos de experiência acadêmica e na indústria da tecnologia.
          </p>
          <div className="lista-docentes py-4">
            <ul className="list-unstyled">
              {professores.map((p) => (
                <li key={p.id}>
                  <Cartao info={p} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainContent>
  );
}
