import React, { useState, useEffect, useRef } from 'react';

import Category from '../Category';
import Header from '../Header';

import './vote.css';

function Vote() {
  const scrollConfig = {
    block: 'start',
    behavior: 'smooth',
  };
  const ulRef = useRef(null);

  const [categories, setCategories] = useState([]);
  const [inView, setInView] = useState(null);
  const [current, setCurrent] = useState(0);
  const [elements, setElements] = useState(null);
  const [end, setEnd] = useState(false);

  useEffect(() => {
    fetchCategories();

    async function fetchCategories() {
      fetch('http://localhost:8080/backend/categorias')
        .then((response) => {
          if (response.status !== 200) throw new Error('Request failed');
          return response.json();
        })
        .then((categories) => {
          setCategories(categories);
          const li = [...ulRef.current.children][0];
          setInView(li);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  useEffect(() => {
    if (categories.length > 0) setElements([...ulRef.current.children]);
  }, [categories]);

  useEffect(() => {
    if (elements !== null) setInView(elements[current]);
  }, [elements]);

  useEffect(() => {
    if (inView) {
      const nextElement = inView.nextElementSibling;

      if (nextElement === undefined || nextElement === null) {
        setEnd(true);
      } else {
        setEnd(false);
      }

      scrollElement(inView)

    }
  }, [inView])

  function showPrevious() {
    const previousElement = inView.previousElementSibling;
    if (previousElement) 
      setInView(previousElement);
  }

  function showNext() {
    const nextElement = inView.nextElementSibling;
    if (nextElement)
      setInView(nextElement);
  }

  function scrollElement(element) {
    element.scrollIntoView(scrollConfig);
  }

  function endPoll(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    var object = {};
    let values = [];
    // formData.forEach((value, key) => object[key] = value);
    formData.forEach((value, key) => values = [...values, {id: value}]); 
    console.log(values)
    fetch('http://localhost:8080/backend/votar', {
      method: 'POST', 
      mode: 'cors',
      body: JSON.stringify({ votos: values })
    })
  }

  return (
    <div className="vote">
      <Header />
      <main>
        <form onSubmit={endPoll}>
          <ul className="row-list" ref={ulRef}>
            {categories.map((category, index) => (
              <li className="poll-wrapper" key={category.id_categoria} id={category.nome}>
                <Category details={category} index={index} />
              </li>
            ))}
          </ul>
          <div className="row">
            <button type='button' className="previous" onClick={showPrevious}>
              Anterior
            </button>

            { !end ? <button type='button' className="next" onClick={showNext}>
                Próxima
              </button> : 
              <button type='submit' className="next">
                Encerrar
              </button> 
            }
          </div>
        </form>
      </main>
    </div>
  );
}

export default Vote;
