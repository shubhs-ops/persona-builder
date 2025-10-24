import React, { useState } from 'react';
import './App.css';
import PersonaForm from './components/PersonaForm';
import PersonaCard from './components/PersonaCard';

function App() {
  const [persona, setPersona] = useState({
    name: '',
    age: '',
    role: '',
    goals: '',
    frustrations: '',
    imageUrl: ''
  });

  const handlePersonaChange = (field, value) => {
    setPersona(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Persona Builder</h1>
        <p>Create detailed user personas with live preview</p>
      </header>
      
      <main className="app-main">
        <div className="form-container">
          <PersonaForm 
            persona={persona} 
            onPersonaChange={handlePersonaChange} 
          />
        </div>
        
        <div className="preview-container">
          <PersonaCard persona={persona} />
        </div>
      </main>
    </div>
  );
}

export default App;
