import React, {useEffect, useRef, useState} from 'react'

import Header from '../Header'
import Adicionar from '../Adicionar';
import Votacao from '../Votacao';
import Gerenciar from '../Gerenciar';

import './styles.css'

function Dashboard() {
  const ulRef = useRef(null)
  const [page, setPage] = useState(0);

  useEffect(() => {
    const children = Array.from(ulRef.current.children);

    children.forEach((child, index) => {
      child.classList.remove('selected');
      if (index === page) child.classList.add('selected');
    });
  }, [page]);

  return (
    <div className="dashboard-wrapper">
      <Header />
        <nav>
          <ul ref={ulRef}>
            <li>
              <button type="button" onClick={() => setPage(0)}>Acompanhar votação</button>
            </li>
            <li>
              <button type="button" onClick={() => setPage(1)}>Adicionar</button>
            </li>
            <li>
              <button type="button" onClick={() => setPage(2)}>Gerenciar</button>
            </li>
          </ul>
        </nav>
      <main>
        {
          page === 0 ? <Votacao /> : 
          page === 1 ?  <Adicionar /> : 
          page === 2 ? <Gerenciar /> : null
        } 
      </main>
    </div>
  )
}

export default Dashboard;