import { useState } from 'react';

const StatsPanel = () => {
  const [dias, setDias] = useState(0);

  return (
    <div className="panel" style={{ padding: '20px', marginBottom: '20px' }}>
      <h2> Estadísticas de Supervivencia</h2>
      <p style={{ fontSize: '24px', margin: '10px 0' }}>
        Días sobrevividos: <strong>{dias}</strong> 
      </p>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => setDias(dias + 1)} style={{ padding: '8px', cursor: 'pointer' }}>
          ➕ Agregar Día
        </button>
        <button onClick={() => setDias(0)} style={{ padding: '8px', cursor: 'pointer' }}>
          ☠️ Reiniciar (Morir)
        </button>
      </div>
    </div>
  );
};

export default StatsPanel;