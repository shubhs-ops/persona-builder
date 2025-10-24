import React from 'react';
import './PersonaCard.css';

const PersonaCard = ({ persona }) => {
  const hasContent = persona.name || persona.role || persona.age || persona.goals || persona.frustrations;

  if (!hasContent) {
    return (
      <div className="persona-card empty">
        <div className="empty-state">
          <div className="empty-icon">👤</div>
          <h3>Persona Preview</h3>
          <p>Start filling out the form to see your persona card update in real-time!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="persona-card">
      <div className="card-header">
        {persona.imageUrl && (
          <div className="persona-image">
            <img 
              src={persona.imageUrl} 
              alt={persona.name || 'Persona'} 
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        )}
        <div className="persona-basic-info">
          <h2 className="persona-name">{persona.name || 'Unnamed Persona'}</h2>
          {persona.role && <p className="persona-role">{persona.role}</p>}
          {persona.age && <p className="persona-age">Age: {persona.age}</p>}
        </div>
      </div>

      <div className="card-content">
        {persona.goals && (
          <div className="info-section">
            <h3>🎯 Goals</h3>
            <p>{persona.goals}</p>
          </div>
        )}

        {persona.frustrations && (
          <div className="info-section">
            <h3>😤 Frustrations</h3>
            <p>{persona.frustrations}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PersonaCard;
