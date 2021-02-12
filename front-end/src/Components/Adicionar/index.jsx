import React, { useState } from 'react';

import './styles.css'

function Adicionar() {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [gameName, setGameName] = useState('');
  const [categoryName, setCategoryName] = useState('');
  function expandSection(e) {
    const sibling = e.currentTarget.nextElementSibling;

    sibling.classList.toggle('show');
  }

  function addGame() {
    setGames([...games, {game_name: gameName}]);
    setGameName('');
  }

  function addCategory() {
    setCategories([...categories, { nome: categoryName, descricao: 'teeste' }]);
    setCategoryName('');
  }

  function handleGamesSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify({games: games}));
    fetch('http://localhost:8080/backend/jogos',  {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({jogos: games})
    })
    .then(response => {
      console.log(response);
      if (response.status !== 200 ) throw new Error('Failed to store games');

      setGames([]);
      return response.json();
    })
    .then(({response}) => alert(response))
    .catch(error => console.log(error));
  }

  function handleCategoriesSubmit(e) {
    e.preventDefault();
    console.log(JSON.stringify({categorias: categories}));
    fetch('http://localhost:8080/backend/categorias',  {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify({categorias: categories})
    })
    .then(response => {
      console.log(response);
      if (response.status !== 200) throw new Error('Failed to store games');

      setCategories([]);
      return response.json();
    })
    .then(({response}) => alert(response))
    .catch(error => console.log(error));
  }

  return (
    <section className="add-wrapper">
      <h1>Adicionar</h1>

      <section className="options-wrapper">
        <button className="action" type="button" onClick={expandSection}>
          <h4>Jogos</h4>
          <span >+</span>
        </button>

        <div>
          <form onSubmit={handleGamesSubmit}>
            <input type="text" name="games" value={gameName} onChange={(e) => setGameName(e.target.value)}/> <button type="button" onClick={addGame}>+</button>
            <ul className="games-list">
              {
                games.map(game => <li key={game.game_name}>{game.game_name}</li>)
              }
            </ul>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
     
        <button type="button" className="action" onClick={expandSection}>
          <h4>Categoria</h4>
          <span >+</span>
        </button>
        <div>
          <form>
            <input type="text" name="categories" value={categoryName} onChange={(e) => setCategoryName(e.target.value)}/> <button type="button" onClick={addCategory}>+</button>
            <ul className="games-list">
              {
                categories.map(category => <li key={category.nome}>{category.nome}</li>)
              }
            </ul>
            <button type="submit" onClick={handleCategoriesSubmit}>Cadastrar</button>
          </form>
        </div>
      </section>
    </section>
  )
}

export default Adicionar;