import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/logo.png';
import twitter from '../../assets/img/twitter.svg';
import twitch from '../../assets/img/twitch.svg';
import youtube from '../../assets/img/youtube.png';

import './home.css';

function Home() {
  return (
    <div className="home-container">
      <header>
        <img className="logo" src={logo} alt="Fuleco Awards" />
      </header>

      <main>
        <h1 className="title">
          Boas vindas à melhor rinha de joguinhos do Brasil
        </h1>
        <p className="text">
          Vote nos melhores e piores jogos desse ano em uma enquete feita
          exclusivamente pela nossa equipe!
        </p>
        <Link to="/vote">
          <button>Votar agora!</button>
        </Link>
      </main>

      <footer>
        <nav>
          <ul className="social">
            <li className="twitter">
              <a
                href="https://twitter.com/ngameplus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li className="youtube">
              <a
                href="https://www.youtube.com/ngameplus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={youtube} alt="Youtube" />
              </a>
            </li>
            <li className="twitch">
              <a
                href="https://twitch.tv/ngameplus"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={twitch} alt="Twitch" />
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
}

export default Home;
