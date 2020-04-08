import React, {useState, useEffect} from "react";
import api from './services/api'
import "./styles.css";

function App() {

  const [repositories, setRepository] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepository(response.data);
    })
  }, [])

  async function handleAddRepository() {
    // TODO
    const response = await api.post('repositories', {
      title: `Novo Repositório ${Date.now()}`,
      url: "https://github.com/danni013/desafios",
      techs: "ReactJS"
    });

    const repository = response.data;

    setRepository([...repositories, repository]);
  }

  async function handleRemoveRepository(id) {
    // TODO
    
    const response = await api.delete('repositories', {
      id: `${id}`
    });

    useEffect(() => {
      api.get('repositories').then(response => {
        setRepository(response.data);
      })
    }, [])
    
    setRepository([repositories]);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => 
          <li key={repository.id}> {repository.title}
            <button onClick={() => handleRemoveRepository(1)}>
              Remover
            </button>
          </li>
        )}
      </ul>
      <button type="button" onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
