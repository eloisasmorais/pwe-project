import React from 'react';
import './poll.css';

function Category({ details, index }) {
  return (
    <>
      <div className="poll">
        <div className="group">
          <h3>{details.nome}</h3>
          <p>{details.descricao}</p>
        </div>

        <ul>
          {details.jogos.map(
            ({ game_id, game_name }) => (
              <>
               <input
                  name={`categoria-${index}`}
                  id={game_id}
                  type="radio"
                  value={game_id}
                />
                <label htmlFor={game_id}>{game_name}</label>
              </>
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default Category;
