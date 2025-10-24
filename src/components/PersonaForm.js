import React from 'react';
import './PersonaForm.css';

const PersonaForm = ({ persona, onPersonaChange }) => {
  const handleChange = (field, value) => {
    onPersonaChange(field, value);
  };

  return (
    <div className="persona-form">
      <h2>Persona Details</h2>
      
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={persona.name}
          onChange={(e) => handleChange('name', e.target.value)}
          placeholder="Enter persona name"
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          value={persona.age}
          onChange={(e) => handleChange('age', e.target.value)}
          placeholder="Enter age"
          min="1"
          max="100"
        />
      </div>

      <div className="form-group">
        <label htmlFor="role">Role</label>
        <input
          type="text"
          id="role"
          value={persona.role}
          onChange={(e) => handleChange('role', e.target.value)}
          placeholder="e.g., Marketing Manager, Software Developer"
        />
      </div>

      <div className="form-group">
        <label htmlFor="goals">Goals</label>
        <textarea
          id="goals"
          value={persona.goals}
          onChange={(e) => handleChange('goals', e.target.value)}
          placeholder="What are their main goals and objectives?"
          rows="3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="frustrations">Frustrations</label>
        <textarea
          id="frustrations"
          value={persona.frustrations}
          onChange={(e) => handleChange('frustrations', e.target.value)}
          placeholder="What challenges and pain points do they face?"
          rows="3"
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl">Image URL</label>
        <input
          type="url"
          id="imageUrl"
          value={persona.imageUrl}
          onChange={(e) => handleChange('imageUrl', e.target.value)}
          placeholder="https://example.com/image.jpg"
        />
      </div>
    </div>
  );
};

export default PersonaForm;
