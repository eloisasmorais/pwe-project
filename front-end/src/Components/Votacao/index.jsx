import React from 'react';

function Votacao() {
  function filterCategories(e) {
    console.log(e.target.value);
  }

  return (
    <>
      <div className="row">
          <h1>Resultados</h1>
          <input type="text" onChange={filterCategories} placeholder="Buscar categoria"/>
        </div>
        <ul className="results-list">
          <li className="result-card">
            <h3>Nome da categoria</h3>
            <ul>
              <li>
                <p>Jogo 1</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '55%' }}></div> <p>55%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
            </ul>
          </li>
          
          <li className="result-card">
            <h3>Nome da categoria 2</h3>
            <ul>
              <li>
                <p>Jogo 1</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '55%' }}></div> <p>55%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
            </ul>
          </li>
          
          <li className="result-card">
            <h3>Nome da categoria 2</h3>
            <ul>
              <li>
                <p>Jogo 1</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '55%' }}></div> <p>55%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
            </ul>
          </li>
          
          <li className="result-card">
            <h3>Nome da categoria 2</h3>
            <ul>
              <li>
                <p>Jogo 1</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '55%' }}></div> <p>55%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
              <li>
                <p>Jogo 2</p>
                <div className="group-info">
                  <div className="percentage-bar" style={{ width: '45%' }}></div> <p>45%</p>
                </div>
              </li>
            </ul>
          </li>
        </ul>
    </>  
  )
}

export default Votacao;