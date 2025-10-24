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
      {/* Header Section with Image and Basic Info */}
      <div className="card-header">
        <div className="persona-image-container">
          {persona.imageUrl ? (
            <div className="persona-image">
              <img 
                src={persona.imageUrl} 
                alt={persona.name || 'Persona'} 
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ) : (
            <div className="persona-image-placeholder">
              <span className="placeholder-icon">👤</span>
            </div>
          )}
        </div>
        
        <div className="persona-basic-info">
          <h2 className="persona-name">{persona.name || 'Unnamed Persona'}</h2>
          {persona.role && <p className="persona-role">{persona.role}</p>}
          {persona.age && <p className="persona-age">{persona.age} years old</p>}
        </div>
      </div>

      {/* Content Section */}
      <div className="card-content">
        {persona.goals && (
          <div className="info-section goals-section">
            <div className="section-header">
              <div className="section-icon">🎯</div>
              <h3>Goals & Motivations</h3>
            </div>
            <p className="section-content">{persona.goals}</p>
          </div>
        )}

        {persona.frustrations && (
          <div className="info-section frustrations-section">
            <div className="section-header">
              <div className="section-icon">😤</div>
              <h3>Pain Points & Frustrations</h3>
            </div>
            <p className="section-content">{persona.frustrations}</p>
          </div>
        )}
      </div>

      {/* Footer with additional context */}
      <div className="card-footer">
        <div className="persona-meta">
          <span className="meta-item">User Persona</span>
          <span className="meta-item">Created with Persona Builder</span>
        </div>
      </div>
    </div>
  );
};

export default PersonaCard;
