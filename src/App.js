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
    const response = await api.post('repositories', {
      title: `Novo repositório ${Date.now()}`,
      owner: "Camila Sales",
      techs: ["JavaScript", "CSS", "HTML"]
    })

    const repo = response.data;

    setRepositories([...repositories, repo]);
  }

  async function handleRemoveRepository(id) {
    api.delete('repositories/'+id).then(response => {
      setRepositories(repositories.filter( repo => repo.id !== id.id));
    })
  };

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repo => {
           return(
            <li key={repo.id}>{repo.title}
              <button onClick={() => handleRemoveRepository([repo.id])}>
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
