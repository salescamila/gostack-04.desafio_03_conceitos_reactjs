import React, { useState, useEffect } from "react";
import api from './services/api';

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    })
  }, [repositories]);

  async function handleAddRepository() {
    // TO-DO
  }

  async function handleRemoveRepository(id) {
    // TO-DO
  };

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repo => {
           return(
            <li key={repo.id}>{repo.title}
              <button onClick={() => handleRemoveRepository(1)}>
                Remover
              </button>
            </li>
           )}
        )}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
};

export default App;
